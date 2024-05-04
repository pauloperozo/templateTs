import 'reflect-metadata';
import { injectable } from 'inversify';
import { NotFound } from '../Helpers/typeError';

@injectable()
export class UserService {
    constructor() {}

    getInfo(userid: string) {
        throw new NotFound('To Be Implement');
    }
}
