import { Container } from 'inversify';
import { TestService } from '../Services/TestService';
import { KycService } from '../Services/KycService';
import { UserService } from '../Services/UserService';

const DIC = new Container();
DIC.bind('TestService').to(TestService);
DIC.bind('KycService').to(KycService);
DIC.bind('UserService').to(UserService);

export { DIC };
