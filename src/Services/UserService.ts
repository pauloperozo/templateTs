import { User } from "../Entities/User"


import bcryptjs from 'bcryptjs'
import { isString } from "class-validator";
import { JwtPayload, sign } from 'jsonwebtoken'
import { env } from 'node:process';

export class UserService {

    constructor(){


    }

    async Create( user : User ) : Promise < User > {
        return User.save( user )
    }

    async findOneByEmail( email : string ) : Promise < User | null > {
        return await User.findOneBy({ email })
    }
    
    async HashPassword( password : string ) : Promise < string > {
        const salt = await bcryptjs.genSalt(10)
        return bcryptjs.hash(password, salt)
    }

    async ComparePassword( req_password:string , db_password:string ) : Promise < Boolean > {
        return bcryptjs.compareSync(req_password,db_password)
    }

    GenerateToken( payload : Object ) : string {
        const { JWT_SECRET } = env
        const token = isString( JWT_SECRET) ?  sign( payload ,JWT_SECRET ,{ expiresIn: '12h' }) : "" 
        return token        
    }   

}