import { ModelCore } from '@holafly/core';

export interface ICustomerRepository {
    getByCustomerId(customerId: string): any;
    getCustomerByEmail(email: string): any;
    updateCustomerEmail(id: string, newEmail: string): any;
    batchDelete(taskQueue: any): any;
    transaction(taskQueue: any): any;
}
