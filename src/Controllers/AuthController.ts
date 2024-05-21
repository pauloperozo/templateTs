import { controller, httpGet, httpPost } from 'inversify-express-utils';
import { Request, Response } from 'express';
import { AuthService } from '../Services/AuthService';
import validationDto from '../Middlewares/validationDto';
import { signInDto, signUpDto } from '../Dtos/authDto';
import { inject } from 'inversify';

@controller('/user')
export class AuthController {
    constructor(@inject('AuthService') private authService: AuthService) { }

    @httpPost('/signUp', validationDto(signUpDto))
    signUp(req: Request, res: Response) {
        const { email } = req.body;
        return this.authService.signUp(email);
    }

    @httpPost('/signUpWithPhone', validationDto(signUpDto))
    signUpWithPhone(req: Request, res: Response) {
        return this.authService.signUpWithPhone();
    }

    @httpPost('/registerNewMail', validationDto(signUpDto))
    registerNewMail(req: Request, res: Response) {
        return this.authService.registerNewMail();
    }

    @httpPost('/signIn', validationDto(signInDto))
    signIn(req: Request, res: Response) {
        const { email, verificationCode } = req.body;
        return this.authService.signIn(email, verificationCode);
    }

    @httpPost('/signInWithApple', validationDto(signInDto))
    signInWithApple(req: Request, res: Response) {
        return this.authService.signInWithApple();
    }

    @httpPost('/signInWithGoogle', validationDto(signInDto))
    signInWithGoogle(req: Request, res: Response) {
        return this.authService.signInWithGoogle();
    }
}
