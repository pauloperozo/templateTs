import { Request,Response,NextFunction }  from 'express'
import { isArray, validateOrReject } from 'class-validator';

const validationDto = ( dtoClass : any ) =>  async ( req : Request, res :Response, next : NextFunction ) => {

    try {
        
        const dtoInstance = new dtoClass();
        Object.assign(dtoInstance, req.body);
        await validateOrReject(dtoInstance );
        next();

    } catch ( error ) {
        const validations = isArray( error ) ? error.map( e=> e.constraints  ) : error
        res.status( 400 ).json( { validations } )
    }
}

export { validationDto }