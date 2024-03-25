import { Request, Response } from 'express';
import { BadRequest } from '../Helpers/errorstype';
import { UserService } from '../Services/UserService';
import { PasswordService } from '../Services/PasswordService';
import { TokenService } from '../Services/TokenService';
import { SendSuccess, SendError } from '../Helpers/responses';

export class AuthController {
    static SignUp = async (req: Request, res: Response) => {
        try {
            const { email, password } = req.body;
            const result = await UserService.findOneByEmail(email);
            if (result) throw new BadRequest('email already registered');

            const hashPassword = await PasswordService.HashPassword(password);
            await UserService.Create({ email, password: hashPassword });

            SendSuccess(res, { message: 'SignUp Success.' });
        } catch (error) {
            SendError(res, error);
        }
    };

    static SignIn = async (req: Request, res: Response) => {
        try {
            const { email, password } = req.body;

            const user = await UserService.findOneByEmail(email);
            if (!user) throw new BadRequest('Unauthorized access.');

            const equalPassword = await PasswordService.ComparePassword(password, user.password);
            if (!equalPassword) throw new BadRequest('Unauthorized access.');

            const { userId, created_at } = user;
            const token = TokenService.GenerateToken({ userId, created_at });

            res.cookie('token', token).setHeader('token', token);
            SendSuccess(res, { message: 'SignIn Success' });
        } catch (error) {
            SendError(res, error);
        }
    };
}
