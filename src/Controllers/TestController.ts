import { controller, httpGet } from 'inversify-express-utils';
import { TestService } from '../Services/TestService';
import { Response, NextFunction } from 'express';
import { inject } from 'inversify';

@controller('/test')
export class TestController {
    constructor(@inject('TestService') private testService: TestService) {}

    @httpGet('/')
    getInfo(res: Response, next: NextFunction) {
        try {
            return this.testService.getInfo();
        } catch (error) {
            next(error);
        }
    }
}
