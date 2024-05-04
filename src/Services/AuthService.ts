import 'reflect-metadata';
import { injectable } from 'inversify';
import { NotFound } from '../Helpers/typeError';

@injectable()
export class AuthService {
    constructor() {}

    signUp(email: string) {
        throw new NotFound('To Be Implement');
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
