import ICustomerRepository from './ICustomerRepository';

export class CustomerRepository implements ICustomerRepository {
    getByCustomerId(customerId: string) {
        throw new Error('Method not implemented.');
    }
    getCustomerByEmail(email: string) {
        throw new Error('Method not implemented.');
    }
    updateCustomerEmail(id: string, newEmail: string) {
        throw new Error('Method not implemented.');
    }
    getOne(filter: object) {
        throw new Error('Method not implemented.');
    }
    batchDelete(taskQueue: any) {
        throw new Error('Method not implemented.');
    }
    update(id: string, data: object) {
        throw new Error('Method not implemented.');
    }
    transaction(taskQueue: any) {
        throw new Error('Method not implemented.');
    }
}
