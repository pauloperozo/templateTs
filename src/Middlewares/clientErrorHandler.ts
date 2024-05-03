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
        const { message } = error;
        const content = error.getContent();
        const statusCode = error.getStatusCode();
        const type = error.getType();

        const outStatusCode = colors.yellow(statusCode.toString());
        const outType = colors.bold(type);
        const outMessage = colors.gray(message);
        console.error(`${outStatusCode} ${outType}:${outMessage}`);

        res.status(error.getStatusCode()).json({ message, content });
    } else {
        const { message, name } = error;
        const outName = colors.bold(name);
        const outMessage = colors.red(message);
        console.error(`${outName}: ${outMessage}`);
        res.status(503).json({ message: 'Internal Error' });
    }
}
