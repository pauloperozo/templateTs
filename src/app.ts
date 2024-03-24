import express from 'express';
import logger from 'morgan';
import cors from 'cors';
import cookies from 'cookie-parser';
import authorization from './Middlewares/authorization';

const app = express();
app.use(cors());
app.use(logger('dev'));
app.use(express.json({ limit: '50mb' }));
app.use(cookies());
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(authorization);
export { app };
