import 'reflect-metadata';
import { injectable } from 'inversify';

@injectable()
export class UserService {
    toBeImplement() {
        return { message: 'To Be Implement' };
    }
}
