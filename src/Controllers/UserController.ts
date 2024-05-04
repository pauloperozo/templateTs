import { controller, httpGet, httpPost } from 'inversify-express-utils';
import { Request, Response } from 'express';
import { UserService } from '../Services/UserService';
import { inject } from 'inversify';
import authenticate from '../Middlewares/authenticate';

@controller('/user', authenticate)
export class UserController {
    constructor(@inject('UserService') private userService: UserService) {}

    @httpGet('/:userid/getInfo')
    getInfo(req: Request, res: Response) {
        const { userid } = req.params;
        return this.userService.getInfo(userid);
    }
}
