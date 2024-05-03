import { controller, httpGet, httpPost } from 'inversify-express-utils';
import { Request, Response } from 'express';
import { UserService } from '../Services/UserService';
import validationDto from '../Middlewares/validationDto';
import { signInDto, signUpDto } from '../Dtos/authDto';
import { inject } from 'inversify';

@controller('/user')
export class AuthController {
    constructor(@inject('UserService') private userService: UserService) {}

    @httpPost('/signUp', validationDto(signUpDto))
    signUp(req: Request, res: Response) {
        const { email } = req.body;
        return this.userService.signUp(email);
    }

    @httpPost('/signIn', validationDto(signInDto))
    signIn(req: Request, res: Response) {
        const { email, verificationCode } = req.body;
        return this.userService.signIn(email, verificationCode);
    }

    @httpPost('/signUpWithPhone')
    signUpWithPhone(req: Request, res: Response) {
        return this.userService.signUpWithPhone();
    }

    @httpPost('/registerNewMail')
    registerNewMail(req: Request, res: Response) {
        return this.userService.registerNewMail();
    }

    @httpPost('/signInWithApple')
    signInWithApple(req: Request, res: Response) {
        return this.userService.signInWithApple();
    }

    @httpPost('/signInWithGoogle')
    signInWithGoogle(req: Request, res: Response) {
        return this.userService.signInWithGoogle();
    }
}
