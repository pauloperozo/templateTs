import { controller, httpGet, httpPost } from 'inversify-express-utils';
import { Request, Response } from 'express';
import { UserService } from '../Services/UserService';
import { inject } from 'inversify';

@controller('/user')
export class UserController {
    constructor(@inject('UserService') private userService: UserService) {}

    @httpGet('/:userid/getCards')
    getCards(req: Request, res: Response) {
        const { userid } = req.params;
        return this.userService.getCards(userid);
    }

    @httpGet('/:userid/getCardsProvider')
    getCardsProvider(req: Request, res: Response) {
        const { userid } = req.params;
        return this.userService.getCardsProvider(userid);
    }

    @httpGet('/:userid/getCard/:iccid')
    getCard(req: Request, res: Response) {
        const { userid, iccid } = req.params;
        return this.userService.getCard(userid, iccid);
    }

    @httpGet('/:userid/kyc/:cardid')
    getkyc(req: Request, res: Response) {
        const { userid, cardid } = req.params;
        return this.userService.getkyc(userid, cardid);
    }

    @httpGet('/:userid/getInfo')
    getInfo(req: Request, res: Response) {
        const { userid } = req.params;
        return this.userService.getInfo(userid);
    }

    @httpGet('/:userid/qr/:cardId')
    getQrCard(req: Request, res: Response) {
        const { userid, cardid } = req.params;
        return this.userService.getQrCard(userid, cardid);
    }

    @httpGet('/:email/qr')
    getUserQr(req: Request, res: Response) {
        const { email } = req.params;
        return this.userService.getUserQr(email);
    }

    @httpGet('/:iccid/nextState')
    getNextState(req: Request, res: Response) {
        const { iccid } = req.params;
        return this.userService.getNextState(iccid);
    }

    @httpGet('/:iccid/getState')
    getState(req: Request, res: Response) {
        const { iccid } = req.params;
        return this.userService.getState(iccid);
    }

    @httpGet('/getProfileInfo/:userid')
    getProfileInfo(req: Request, res: Response) {
        const { userid } = req.params;
        return this.userService.getProfileInfo(userid);
    }

    @httpGet('/:userid/manualActivation/:iccid')
    getManualActivation(req: Request, res: Response) {
        const { userid, iccid } = req.params;
        return this.userService.getManualActivation(userid, iccid);
    }

    @httpPost('/signUpWithPhone')
    signUpWithPhone(req: Request, res: Response) {
        return this.userService.signUpWithPhone();
    }

    @httpPost('/signUp')
    signUp(req: Request, res: Response) {
        return this.userService.signUp();
    }

    @httpPost('/registerNewMail')
    registerNewMail(req: Request, res: Response) {
        return this.userService.registerNewMail();
    }

    @httpPost('/signIn')
    signIn(req: Request, res: Response) {
        return this.userService.signIn();
    }

    @httpPost('/signInWithApple')
    signInWithApple(req: Request, res: Response) {
        return this.userService.signInWithApple();
    }

    @httpPost('/signInWithGoogle')
    signInWithGoogle(req: Request, res: Response) {
        return this.userService.signInWithGoogle();
    }

    @httpPost('/updateProfileInfo/:userid')
    updateProfileInfo(req: Request, res: Response) {
        const { userid } = req.params;

        return this.userService.updateProfileInfo(userid);
    }
}
