import { Request, Response } from 'express';
import { SendError } from '../Helpers/responses';

export class WelcomeController {
    async Welcome(req: Request, res: Response) {
        try {
            res.json({ message: 'Welcome to aplications....' });
        } catch (error) {
            SendError(res, error);
        }
    }
}
