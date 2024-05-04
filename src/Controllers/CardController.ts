import { controller, httpGet, httpPost } from 'inversify-express-utils';
import { Request, Response } from 'express';
import { CardService } from '../Services/CardService';
import { inject } from 'inversify';
import authenticate from '../Middlewares/authenticate';

@controller('/user', authenticate)
export class CardController {
    constructor(@inject('CardService') private cardService: CardService) {}

    @httpGet('/:userid/getCards')
    getCards(req: Request, res: Response) {
        const { userid } = req.params;
        return this.cardService.getCards(userid);
    }

    @httpGet('/:userid/getCardsProvider')
    getCardsProvider(req: Request, res: Response) {
        const { userid } = req.params;
        return this.cardService.getCardsProvider(userid);
    }

    @httpGet('/:userid/qr/:cardId')
    getQrCard(req: Request, res: Response) {
        const { userid, cardid } = req.params;
        return this.cardService.getQrCard(userid, cardid);
    }

    @httpGet('/:email/qr')
    getUserQr(req: Request, res: Response) {
        const { email } = req.params;
        return this.cardService.getUserQr(email);
    }

    @httpGet('/:userid/manualActivation/:iccid')
    getManualActivation(req: Request, res: Response) {
        const { userid, iccid } = req.params;
        return this.cardService.getManualActivation(userid, iccid);
    }
}
