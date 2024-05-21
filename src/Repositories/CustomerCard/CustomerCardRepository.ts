import { dbCustomers } from '@holafly/core';
import DatabaseCore from '../Database/DatabaseCore';
import { Model } from 'sequelize/types';
const { CustomerCard } = dbCustomers;

export class CustomerCardRepository extends DatabaseCore<Model> implements ICustomerCardRepository {
    constructor() {
        super(CustomerCard);
    }
    async getByIccid(iccid: string) {
        return this.getOne({ where: { iccid } })
    }
}
