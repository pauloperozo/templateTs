import 'dotenv/config';
import 'reflect-metadata';
import { InversifyExpressServer } from 'inversify-express-utils';
import { DIC } from './DIC/inversify.config';
import { env } from 'node:process';
import { ExpressServer } from './app';
import './Controllers';

(async (_) => {
    const { PORT } = env;
    const server = new InversifyExpressServer(DIC);
    server.setConfig(ExpressServer).build().listen(PORT);
})();
