import { controller, httpGet, httpPost } from 'inversify-express-utils';
import { Request, Response } from 'express';
import { MachineService } from '../Services/MachineService';
import { inject } from 'inversify';
import authenticate from '../Middlewares/authenticate';

@controller('/user', authenticate)
export class MachineController {
    constructor(@inject('MachineService') private machineService: MachineService) {}

    @httpGet('/:iccid/nextState')
    getNextState(req: Request, res: Response) {
        const { iccid } = req.params;
        return this.machineService.getNextState(iccid);
    }

    @httpGet('/:iccid/getState')
    getState(req: Request, res: Response) {
        const { iccid } = req.params;
        return this.machineService.getState(iccid);
    }
}
