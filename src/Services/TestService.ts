import 'reflect-metadata';
import { injectable } from 'inversify';

@injectable()
export class TestService {
    getInfo() {
        return { message: 'Hfc-express-api' };
    }
}
