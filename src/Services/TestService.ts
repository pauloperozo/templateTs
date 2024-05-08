import 'reflect-metadata';
import { injectable, inject } from 'inversify';
import { TYPES } from '../DIC/types';
import { ITestRepository } from '../Repositories/TestRepositories/ITestRepository';

@injectable()
export class TestService {
    constructor(@inject(TYPES.TestRepository) private testRepository: ITestRepository) {}
    getServiceTest() {
        return { message: 'Test Service checked.' };
    }

    getMessageRepository() {
        const message = this.testRepository.getMessageRepository();
        return { message };
    }
}
