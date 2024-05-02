import { Request, Response, NextFunction } from 'express';
import TypeError from '../Helpers/typeError';
import colors from 'colors';

export function clientErrorHandler(error: Error, req: Request, res: Response, next: NextFunction) {
    const isError = (error: any) => ('message' in error ? error.message : '');
    const message = isError(error);

    const isInstance =
        error instanceof TypeError.BadRequest ||
        error instanceof TypeError.InternalError ||
        error instanceof TypeError.NotFound ||
        error instanceof TypeError.Unauthorized;

    if (isInstance) {
        const statusCode = colors.yellow(error.getStatusCode().toString());
        const type = colors.bold(error.getType());
        const message = colors.gray(error.message);
        console.error(`${statusCode} ${type}:${message}`);
        res.status(error.getStatusCode()).json({ message });
    } else {
        const title = colors.bold(error.name);
        const message = colors.red(error.message);
        console.error(`${title}: ${message}`);
        res.status(503).json({ message: 'Internal Error' });
    }
}
