import 'reflect-metadata';
import { injectable } from 'inversify';
import { NotFound } from '../Helpers/typeError';

@injectable()
export class CardService {
    constructor() {}

    getCards(userid: string) {
        throw new NotFound('To Be Implement');
    }

    getCardsProvider(userid: string) {
        throw new NotFound('To Be Implement');
    }

    getQrCard(userid: string, cardid: string) {
        throw new NotFound('To Be Implement');
    }

    getUserQr(email: string) {
        throw new NotFound('To Be Implement');
    }

    getManualActivation(userid: string, iccid: string) {
        throw new NotFound('To Be Implement');
    }
}
