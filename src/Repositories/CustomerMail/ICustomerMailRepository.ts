interface ICustomerMailRepository {

    getOne(filter: any): any
    getByCustomerId(customerId: string): any

}
