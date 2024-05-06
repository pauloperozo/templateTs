interface ICustomerRepository {
    getByCustomerId(customerId: string): any;
    getCustomerByEmail(email: string): any;
    updateCustomerEmail(id: string, newEmail: string): any;
    getOne(filter: object): any;
    batchDelete(taskQueue: any): any;
    transaction(taskQueue: any): any;
}
