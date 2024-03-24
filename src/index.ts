import 'dotenv/config';
import { env } from 'node:process';
import { app } from './app';
import { AppDataSource } from './Database/data-source';
import routes from './Routes';

(async (_) => {
  const { PORT } = env;
  await AppDataSource.initialize();
  routes(app);

  if (true === 1) console.log('hola');

  await app.listen(PORT, () =>
    console.log(`API Corriendo Por El Puerto :${PORT}`)
  );
})();
