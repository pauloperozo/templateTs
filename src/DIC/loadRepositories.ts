import { Container } from 'inversify';
import { CustomerRepository } from '../Repositories/Customer/CustomerRepository';
import { TestRepositories } from '../Repositories/TestRepositories/TestRepository';
import { TYPES } from './types';

export default (DIC: Container) => {
    DIC.bind(TYPES.TestRepository).to(TestRepositories);
    DIC.bind(TYPES.CustomerRepository).to(CustomerRepository);
};
