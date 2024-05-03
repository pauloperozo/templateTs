import 'reflect-metadata';
import { injectable } from 'inversify';
import { NotFound } from '../Helpers/typeError';

@injectable()
export class UserService {
    constructor() {}

    getCards(userid: string) {
        throw new NotFound('To Be Implement');
    }

    getCardsProvider(userid: string) {
        throw new NotFound('To Be Implement');
    }

    getCard(userid: string, iccid: string) {
        throw new NotFound('To Be Implement');
    }

    getkyc(userid: string, cardid: string) {
        throw new NotFound('To Be Implement');
    }

    getInfo(userid: string) {
        throw new NotFound('To Be Implement');
    }

    getQrCard(userid: string, cardid: string) {
        throw new NotFound('To Be Implement');
    }

    getUserQr(email: string) {
        throw new NotFound('To Be Implement');
    }

    getNextState(iccid: string) {
        throw new NotFound('To Be Implement');
    }

    getState(iccid: string) {
        throw new NotFound('To Be Implement');
    }

    getProfileInfo(userid: string) {
        throw new NotFound('To Be Implement');
    }

    getManualActivation(userid: string, iccid: string) {
        throw new NotFound('To Be Implement');
    }

    signUpWithPhone() {
        throw new NotFound('To Be Implement');
    }

    signUp() {
        throw new NotFound('To Be Implement');
    }

    registerNewMail() {
        throw new NotFound('To Be Implement');
    }

    signIn(email: string, verificationCode: string) {
        console.log(email);
        console.log(verificationCode);
        throw new NotFound('To Be Implement');
    }

    signInWithApple() {
        throw new NotFound('To Be Implement');
    }

    signInWithGoogle() {
        throw new NotFound('To Be Implement');
    }

    updateProfileInfo(userid: string) {
        throw new NotFound('To Be Implement');
    }
}
