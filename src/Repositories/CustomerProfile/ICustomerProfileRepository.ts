interface ICustomerProfileRepository {
    getByCustomerId(customerId: string): any
}