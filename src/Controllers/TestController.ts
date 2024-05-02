import { controller, httpGet } from 'inversify-express-utils';
import { TestService } from '../Services/TestService';
import { Response } from 'express';
import { inject } from 'inversify';

@controller('/test')
export class TestController {
    constructor(@inject('TestService') private testService: TestService) {}

    @httpGet('/')
    getInfo(res: Response) {
        return this.testService.getInfo();
    }
}
