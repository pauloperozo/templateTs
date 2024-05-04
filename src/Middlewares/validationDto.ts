import { Request, Response, NextFunction } from 'express';
import { isArray, validateOrReject } from 'class-validator';
import { BadRequest } from '../Helpers/typeError';

export default (dtoClass: any) => async (req: Request, res: Response, next: NextFunction) => {
    try {
        const dtoInstance = new dtoClass();
        Object.assign(dtoInstance, req.body);
        await validateOrReject(dtoInstance);
        next();
    } catch (error) {
        const content = isArray(error) ? error.map((e) => e.constraints) : error;
        next(new BadRequest('ValidationError', content));
    }
};
