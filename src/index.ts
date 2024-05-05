import 'dotenv/config';
import 'reflect-metadata';
import { InversifyExpressServer } from 'inversify-express-utils';
import { DIC } from './DIC/inversifyConfig';
import { setConfig, setErrorConfig } from './app';
import config from './config';

(async (_) => {
    const { port } = config.server;
    const server = new InversifyExpressServer(DIC);
    server.setConfig(setConfig).setErrorConfig(setErrorConfig).build().listen(port);
})();
