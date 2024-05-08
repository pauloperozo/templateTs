import { controller, httpGet, httpMethod } from 'inversify-express-utils';
import { TestService } from '../Services/TestService';
import { Request, Response } from 'express';
import { inject } from 'inversify';

@controller('/test')
export class TestController {
    constructor(@inject('TestService') private testService: TestService) {}

    @httpMethod('all', '/')
    getListen() {
        return { message: 'Test Listen checked.' };
    }

    @httpGet('/controller')
    getControllerTest(req: Request, res: Response) {
        return { message: 'Test Controller checked.' };
    }

    @httpGet('/service')
    getServiceTest(req: Request, res: Response) {
        return this.testService.getServiceTest();
    }

    @httpGet('/repository')
    getMessageRepository(req: Request, res: Response) {
        return this.testService.getMessageRepository();
    }
}
