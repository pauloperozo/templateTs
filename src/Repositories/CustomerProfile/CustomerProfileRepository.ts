import { dbCustomers } from '@holafly/core';
import DatabaseCore from '../Database/DatabaseCore';
import { Model } from 'sequelize/types';
const { CustomerProfile } = dbCustomers;

export class CustomerProfileRepository
    extends DatabaseCore<Model>
    implements ICustomerProfileRepository
{
    constructor() {
        super(CustomerProfile);
    }
}
