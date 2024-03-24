import { Router,Request,Response,NextFunction }  from 'express'
import { AnyZodObject,ZodError } from 'zod'
import HttpError from '../helpers/error'

export const schemaValidations = ( schema: AnyZodObject ) => async( req : Request, res :Response, next : NextFunction ) => { 

    try {
        schema.parse( req.body)
        next()
    } 
    catch ( error ) {
        const { statusCode,response } = HttpError( error ) 
        res.status( statusCode ).json( response )
    }
    
}
