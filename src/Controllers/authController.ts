import { Request, Response }  from 'express'
import { User } from '../Entities/User'
import { BadRequest } from '../Helpers/errorstype'
import { UserService } from '../Services/UserService'
import { SendSuccess,SendError } from '../Helpers/responses'

export class AuthController {

    private userService     

    constructor(){
        this.userService = new UserService()
    }

    public SignUp = async( req:Request, res:Response ) => {

        try {
        
            const { email,password } = req.body
            const result = await this.userService.findOneByEmail( email)
            if( result )  throw new BadRequest('email already registered')

            const user = new User()
                  user.email  = email
                  user.password =  await this.userService.HashPassword( password )

            await this.userService.Create( user )
            SendSuccess(res,{ message:"SignUp Success."})

        } catch ( error ) {           
            SendError( res,error )
        }

    }

    public SignIn = async ( req:Request, res:Response ) => {

        try {
        
            const { email,password } = req.body

            const user = await this.userService.findOneByEmail( email )
            if(! user ) throw new BadRequest('Unauthorized access.')

            const equalPassword = await this.userService.ComparePassword( password, user.password )
            if(!equalPassword) throw new BadRequest('Unauthorized access.')

            const { userId, created_at } = user
            const token =  this.userService.GenerateToken( { userId,created_at} )

            res.cookie('token', token ).setHeader('token',token)
            SendSuccess(res,{ message : 'SignIn Success'})

        } catch ( error ) {           
           SendError(res, error )
        }
    } 

}

