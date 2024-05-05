import { Container } from 'inversify';
import config from '../config';
import './loadControllers';
import loadServices from './loadServices';
import loadRepositories from './loadRepositories';

const DIC = new Container();
loadServices(DIC);
loadRepositories(DIC);

export { DIC };
