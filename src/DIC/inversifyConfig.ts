import { Container } from 'inversify';
import { TestService } from '../Services/TestService';
import { AuthService } from '../Services/AuthService';
import { UserService } from '../Services/UserService';
import { ProfileService } from '../Services/ProfileService';
import { CardService } from '../Services/CardService';
import { MachineService } from '../Services/MachineService';

/*Load Services */
const DIC = new Container();
DIC.bind('TestService').to(TestService);
DIC.bind('AuthService').to(AuthService);
DIC.bind('UserService').to(UserService);
DIC.bind('ProfileService').to(ProfileService);
DIC.bind('CardService').to(CardService);
DIC.bind('MachineService').to(MachineService);

export { DIC };
