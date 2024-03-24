import { Router,Request,Response,NextFunction }  from 'express'
import jwt from 'jsonwebtoken'
import { env } from 'node:process';

export default async( req : Request, res :Response, next : NextFunction ) => { 

    const { PUBLIC_ROUTE, JWT_SECRET } = env
    if( !PUBLIC_ROUTE || !JWT_SECRET ) throw new Error("Server Authorization Error")

	const publicUrls = PUBLIC_ROUTE.split(',') || []
	const isPublicUrl = publicUrls.includes( req.originalUrl )
    const message = 'Unauthorized access'

    try {
    
        if( !isPublicUrl ) {
    
            const token = req.cookies?.token || req.headers.token
            if(!token ) throw new Error( message )
            res.locals.session = jwt.verify(token,JWT_SECRET)
        }

        next()
    } 
    catch ( e ) {
        res.status( 401 ).json( { message } )
    }

}

