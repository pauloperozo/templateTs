import { dbCustomers } from '@holafly/core';
import DatabaseCore from '../Database/DatabaseCore';
import { Model } from 'sequelize/types';
const { CustomerMail } = dbCustomers;

export class CustomerMailRepository extends DatabaseCore<Model> implements ICustomerMailRepository {
    constructor() {
        super(CustomerMail);
    }

    getByCustomerId(customerId: string) {

    }

}
