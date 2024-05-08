import { ITestRepository } from './ITestRepository';
import { injectable } from 'inversify';

@injectable()
export class TestRepositories implements ITestRepository {
    getMessageRepository(): string {
        return 'Test Repository checked.';
    }
}
