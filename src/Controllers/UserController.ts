import { controller, httpGet, httpPost } from 'inversify-express-utils';
import { Request, Response, NextFunction } from 'express';
import { UserService } from '../Services/UserService';
import { inject } from 'inversify';

@controller('/user')
export class UserController {
    constructor(@inject('UserService') private userService: UserService) {}

    @httpGet('/:userid/getCards')
    getCards(req: Request, res: Response, next: NextFunction) {
        try {
            return this.userService.toBeImplement();
        } catch (error) {
            next(error);
        }
    }

    @httpGet('/:userid/getCardsProvider')
    getCardsProvider(req: Request, res: Response, next: NextFunction) {
        try {
            const { userid } = req.params;
            return this.userService.toBeImplement();
        } catch (error) {
            next(error);
        }
    }

    @httpGet('/:userid/getCard/:iccid')
    getCard(req: Request, res: Response, next: NextFunction) {
        try {
            const { userid } = req.params;
            return this.userService.toBeImplement();
        } catch (error) {
            next(error);
        }
    }

    @httpGet('/:userid/kyc/:cardid')
    getkyc(req: Request, res: Response, next: NextFunction) {
        try {
            const { userid, cardid } = req.params;
            return this.userService.toBeImplement();
        } catch (error) {
            next(error);
        }
    }

    @httpGet('/:userid/getInfo')
    getInfo(req: Request, res: Response, next: NextFunction) {
        try {
            const { userid } = req.params;
            return this.userService.toBeImplement();
        } catch (error) {
            next(error);
        }
    }

    @httpGet('/:userId/qr/:cardId')
    getQrCard(req: Request, res: Response, next: NextFunction) {
        try {
            const { userid, cardid } = req.params;
            return this.userService.toBeImplement();
        } catch (error) {
            next(error);
        }
    }

    @httpGet('/:email/qr')
    getUserQr(req: Request, res: Response, next: NextFunction) {
        try {
            const { email } = req.params;
            return this.userService.toBeImplement();
        } catch (error) {
            next(error);
        }
    }

    @httpGet('/:iccid/nextState')
    getNextState(req: Request, res: Response, next: NextFunction) {
        try {
            const { iccid } = req.params;
            return this.userService.toBeImplement();
        } catch (error) {
            next(error);
        }
    }

    @httpGet('/:iccid/getState')
    getState(req: Request, res: Response, next: NextFunction) {
        try {
            const { iccid } = req.params;
            return this.userService.toBeImplement();
        } catch (error) {
            next(error);
        }
    }

    @httpGet('/getProfileInfo/:userid')
    getProfileInfo(req: Request, res: Response, next: NextFunction) {
        try {
            const { userid } = req.params;
            return this.userService.toBeImplement();
        } catch (error) {
            next(error);
        }
    }

    @httpGet('/:userId/manualActivation/:iccid')
    getManualActivation(req: Request, res: Response, next: NextFunction) {
        try {
            const { userid, iccid } = req.params;
            return this.userService.toBeImplement();
        } catch (error) {
            next(error);
        }
    }

    @httpPost('/signUpWithPhone')
    signUpWithPhone(req: Request, res: Response, next: NextFunction) {
        try {
            return this.userService.toBeImplement();
        } catch (error) {
            next(error);
        }
    }

    @httpPost('/signUp')
    signUp(req: Request, res: Response, next: NextFunction) {
        try {
            return this.userService.toBeImplement();
        } catch (error) {
            next(error);
        }
    }

    @httpPost('/registerNewMail')
    registerNewMail(req: Request, res: Response, next: NextFunction) {
        try {
            return this.userService.toBeImplement();
        } catch (error) {
            next(error);
        }
    }

    @httpPost('/signIn')
    signIn(req: Request, res: Response, next: NextFunction) {
        try {
            return this.userService.toBeImplement();
        } catch (error) {
            next(error);
        }
    }

    @httpPost('/signInWithApple')
    signInWithApple(req: Request, res: Response, next: NextFunction) {
        try {
            return this.userService.toBeImplement();
        } catch (error) {
            next(error);
        }
    }

    @httpPost('/signInWithGoogle')
    signInWithGoogle(req: Request, res: Response, next: NextFunction) {
        try {
            return this.userService.toBeImplement();
        } catch (error) {
            next(error);
        }
    }

    @httpPost('/updateProfileInfo/:userid')
    updateProfileInfo(req: Request, res: Response, next: NextFunction) {
        try {
            return this.userService.toBeImplement();
        } catch (error) {
            next(error);
        }
    }
}
