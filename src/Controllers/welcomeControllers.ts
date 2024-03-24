import { Request, Response }  from 'express'
import HttpError from '../Helpers/responses'

export class WelcomeController {

    async Welcome( req:Request, res:Response ) {

        try {
            res.json({message:"Welcome to aplications...."})
        } catch ( error ) {           
            const { statusCode,response } = HttpError( error ) 
            res.status( statusCode ).json( response )
        }

    }

}

 