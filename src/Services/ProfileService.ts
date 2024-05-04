import 'reflect-metadata';
import { injectable } from 'inversify';
import { NotFound } from '../Helpers/typeError';

@injectable()
export class ProfileService {
    constructor() {}

    getProfileInfo(userid: string) {
        throw new NotFound('To Be Implement');
    }

    updateProfileInfo(userid: string) {
        throw new NotFound('To Be Implement');
    }
}
