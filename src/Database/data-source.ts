import 'reflect-metadata';
import { env } from 'node:process';
import { DataSource } from 'typeorm';
import entities from '../Entities';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: env.DBHOST,
  port: Number(env.DBPORT),
  username: env.DBUSER,
  password: env.DBPASSWORD,
  database: env.DBDATABASE,
  entities: entities,
  synchronize: true,
  migrationsRun: true,
  logging: false
});
