import { dbCustomers } from '@holafly/core';
import DatabaseCore from '../Database/DatabaseCore';
import { Model } from 'sequelize/types';
const { BlockedCustomer } = dbCustomers;

export class BlockedCustomerRepository
    extends DatabaseCore<Model>
    implements IBlockedCustomerRepository
{
    constructor() {
        super(BlockedCustomer);
    }
}
