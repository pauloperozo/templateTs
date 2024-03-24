import { Application } from 'express';
import { welcomeRouter } from './welcomeRouter';
import { authRouter } from './authRouter';

export default (app: Application) => {
  app.use('/welcome', welcomeRouter);
  app.use('/auth', authRouter);
};
