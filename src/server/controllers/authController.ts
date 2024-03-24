import { Request, Response }  from 'express'
import { User } from '../../aplications/entities/User'
import HttpError from '../helpers/error'
import { UserService } from '../../aplications/services/UserService'

export class AuthController {

    private userService     

    constructor(){
        this.userService = new UserService()
    }

    async SignUp( req:Request, res:Response ) {

        try {
        
            const { email,password } = req.body
            const result = await this.userService.findOneByEmail( email)
            if( result ) throw new Error('email already registered')

            const user = new User()
                  user.email  = email
                  user.password =  await this.userService.HashPassword( password )

            await this.userService.Create( user )
            res.status(200).json({ message:"SignUp Success."})

        } catch ( error ) {           
            const { statusCode,response } = HttpError( error ) 
            res.status( statusCode ).json( response )
        }

    }

    async SignIn( req:Request, res:Response ) {

        try {
        
            const { email,password } = req.body

            const user = await this.userService.findOneByEmail( email )
            if(! user ) throw new Error('Unauthorized access.')

            const equalPassword = await this.userService.ComparePassword( password, user.password )
            if(!equalPassword) throw new Error('Unauthorized access.')

            const { userId, created_at } = user
            const token =  this.userService.GenerateToken( { userId,created_at} )
            res.status(200).cookie('token', token ).json({ message : 'success', token }) 

        } catch ( error ) {           
            const { statusCode,response } = HttpError( error ) 
            res.status( statusCode ).json( response )
        }
    } 

}

