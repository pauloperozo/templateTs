import { Router,Request,Response,NextFunction }  from 'express'
import jwt from 'jsonwebtoken'
import { env } from 'node:process';
import { SendError } from '../Helpers/responses';
import { Unauthorized } from '../Helpers/errorstype';

export default async( req : Request, res :Response, next : NextFunction ) => { 

    const { PUBLIC_ROUTE, JWT_SECRET } = env
    if( !PUBLIC_ROUTE || !JWT_SECRET ) throw new Unauthorized('Server Module Authorization Error...') 

	const publicUrls = PUBLIC_ROUTE.split(',') || []
	const isPublicUrl = publicUrls.includes( req.originalUrl )

    try {
    
        if( !isPublicUrl ) {
    
            const token = req.cookies?.token || req.headers.token
            if(!token ) throw new Unauthorized('Required Token...')
            res.locals.session = jwt.verify(token,JWT_SECRET)
        }

        next()
    } 
    catch ( error  ) {

       const unauthorized = new Unauthorized('Unauthorized access')
       SendError( res , unauthorized )
    }

}

