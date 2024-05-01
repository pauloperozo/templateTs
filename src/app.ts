import { Application, json, urlencoded } from 'express';
import logger from 'morgan';
import cors from 'cors';
import cookies from 'cookie-parser';

export function ExpressServer(app: Application) {
    app.use(cors());
    app.use(logger('dev'));
    app.use(json({ limit: '50mb' }));
    app.use(cookies());
    app.use(urlencoded({ limit: '50mb', extended: true }));
}
