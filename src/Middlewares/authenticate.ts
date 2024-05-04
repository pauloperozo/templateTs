import { Request, Response, NextFunction } from 'express';
import { Unauthorized } from '../Helpers/typeError';

export default (req: Request, res: Response, next: NextFunction) => {
    const token: string = req.cookies?.token || req.headers?.token;
    if (!token) throw new Unauthorized('Required Token');

    next();
};
