import { controller, httpGet } from 'inversify-express-utils';
import { KycService } from '../Services/KycService';
import { Request, Response } from 'express';
import { inject } from 'inversify';

@controller('/kyc')
export class KycController {
    constructor(@inject('KycService') private kycService: KycService) {}

    @httpGet('/downloadXLSX')
    DownloadXLSX(res: Response) {
        return this.kycService.DownloadXLSX();
    }

    @httpGet('/sendMailXLSX/:email')
    SendMailXLSX(req: Request, res: Response) {
        const { email } = req.params;
        return this.kycService.SendMailXLSX(email);
    }
}
