import { User } from "../entities/User"
import bcryptjs from 'bcryptjs'
import { JwtPayload, sign } from 'jsonwebtoken'
import { env } from 'node:process';

export class UserService {

    static async Create( user : User ) : Promise < User > {
        return User.save( user )
    }

    static async findOneByEmail( email : string ) : Promise < User > {
        return await User.findOneBy({ email })
    }
    
    static async HashPassword( password : string ) : Promise < string > {
        const salt = await bcryptjs.genSalt(10)
        return bcryptjs.hash(password, salt)
    }

    static async ComparePassword( req_password:string , db_password:string ) : Promise < Boolean > {
        return bcryptjs.compareSync(req_password,db_password)
    }

    static GenerateToken( payload : Object ) : String {
        const { JWT_SECRET } = env
        return sign( payload ,JWT_SECRET ,{ expiresIn: '12h' })
    }

}