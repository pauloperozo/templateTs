import 'dotenv/config';
import 'reflect-metadata';
import { InversifyExpressServer } from 'inversify-express-utils';
import { DIC } from './DIC/inversify.config';
import { setConfig, setErrorConfig } from './app';
import config from './config';
import './Controllers';

(async (_) => {
    const { port } = config.server;
    const server = new InversifyExpressServer(DIC);
    server.setConfig(setConfig).setErrorConfig(setErrorConfig).build().listen(port);
})();
