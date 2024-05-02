import { Application, json, urlencoded, static as static_ } from 'express';
import logger from 'morgan';
import cors from 'cors';
import cookies from 'cookie-parser';
import { swaggerRoute } from './Docs/swagger';
import { clientErrorHandler } from './Middlewares/clientErrorHandler';

export function setConfig(app: Application) {
    app.use(cors());
    app.use(logger('dev'));
    app.use(json({ limit: '50mb' }));
    app.use(cookies());
    app.use(urlencoded({ limit: '50mb', extended: true }));
    app.use(swaggerRoute('/docs'));
}

export function setErrorConfig(app: Application) {
    app.use(clientErrorHandler);
}
