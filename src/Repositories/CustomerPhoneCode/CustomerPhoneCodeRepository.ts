import { dbCustomers } from '@holafly/core';
import DatabaseCore from '../Database/DatabaseCore';
import { Model } from 'sequelize/types';
const { CustomerPhoneCode } = dbCustomers;

export class CustomerPhoneCodeRepository
    extends DatabaseCore<Model>
    implements ICustomerMailRepository {
    constructor() {
        super(CustomerPhoneCode);
    }
    getByCustomerId(customerId: string) {
        throw new Error('Method not implemented.');
    }
}
