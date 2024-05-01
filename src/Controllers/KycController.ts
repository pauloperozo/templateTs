import { controller, httpGet } from 'inversify-express-utils';
import { KycService } from '../Services/KycService';
import { Request, Response, NextFunction } from 'express';
import { inject } from 'inversify';

@controller('/kyc')
export class KycController {
    constructor(@inject('KycService') private kycService: KycService) {}

    @httpGet('/downloadXLSX')
    DownloadXLSX(res: Response, next: NextFunction) {
        try {
            return this.kycService.DownloadXLSX();
        } catch (error) {
            next(error);
        }
    }

    @httpGet('/sendMailXLSX/:email')
    SendMailXLSX(req: Request, res: Response, next: NextFunction) {
        try {
            const { email } = req.params;
            return this.kycService.SendMailXLSX(email);
        } catch (error) {
            next(error);
        }
    }
}
