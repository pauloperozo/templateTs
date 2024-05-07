import { Container } from 'inversify';
import { CustomerRepository } from '../Repositories/Customer/CustomerRepository';
import { TYPES } from './types';

export default (DIC: Container) => {
    DIC.bind(TYPES.CustomerRepository).to(CustomerRepository);
};
