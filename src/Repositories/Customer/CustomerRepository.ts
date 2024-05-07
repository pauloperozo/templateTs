import { ICustomerRepository } from './ICustomerRepository';
import DatabaseCore from '../Database/DatabaseCore';
import { dbCustomers } from '@holafly/core';
import { Model } from 'sequelize/types';
const { Customer } = dbCustomers;

export class CustomerRepository extends DatabaseCore<Model> implements ICustomerRepository {
    constructor() {
        super(Customer);
    }
    getByCustomerId(customerId: string) {
        throw new Error('Method not implemented.');
    }
    getCustomerByEmail(email: string) {
        throw new Error('Method not implemented.');
    }
    updateCustomerEmail(id: string, newEmail: string) {
        throw new Error('sMethod not implemented.');
    }
    batchDelete(taskQueue: any) {
        throw new Error('Method not implemented.');
    }
    transaction(taskQueue: any) {
        throw new Error('Method not implemented.');
    }
}
