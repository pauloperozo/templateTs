import { controller, httpGet, httpPost } from 'inversify-express-utils';
import { Request, Response } from 'express';
import { ProfileService } from '../Services/ProfileService';
import { inject } from 'inversify';
import authenticate from '../Middlewares/authenticate';

@controller('/user', authenticate)
export class ProfileController {
    constructor(@inject('ProfileService') private profileService: ProfileService) {}

    @httpGet('/getProfileInfo/:userid')
    getProfileInfo(req: Request, res: Response) {
        const { userid } = req.params;
        return this.profileService.getProfileInfo(userid);
    }

    @httpPost('/updateProfileInfo/:userid')
    updateProfileInfo(req: Request, res: Response) {
        const { userid } = req.params;

        return this.profileService.updateProfileInfo(userid);
    }
}
