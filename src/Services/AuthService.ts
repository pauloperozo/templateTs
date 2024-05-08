import 'reflect-metadata';
import { ICustomerRepository } from '../Repositories/Customer/ICustomerRepository';
import { injectable, inject } from 'inversify';
import { NotFound } from '../Helpers/typeError';
import { TYPES } from '../DIC/types';

@injectable()
export class AuthService {
    constructor(
        @inject(TYPES.CustomerRepository) private customerRepository: ICustomerRepository
    ) {}

    async signUp(email: string) {
        const result = await this.customerRepository.getCustomerByEmail(email);
        return result;
    }

    signIn(email: string, verificationCode: string) {
        console.log(email);
        console.log(verificationCode);
        throw new NotFound('To Be Implement');
    }

    registerNewMail() {
        throw new NotFound('To Be Implement');
    }

    signUpWithPhone() {
        throw new NotFound('To Be Implement');
    }

    signInWithApple() {
        throw new NotFound('To Be Implement');
    }

    signInWithGoogle() {
        throw new NotFound('To Be Implement');
    }
}
