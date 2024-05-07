import { Container } from 'inversify';
import { CustomerRepository } from 'src/Repositories/Customer/CustomerRepository';

export default (DIC: Container) => {
    //    DIC.bind('CustomerRepository').to(CustomerRepository);

    DIC.bind<ICustomerRepository>('CustomerRepository').to(CustomerRepository);
};
