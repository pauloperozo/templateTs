import 'reflect-metadata';
import { injectable } from 'inversify';
import { NotFound } from '../Helpers/typeError';

@injectable()
export class MachineService {
    constructor() {}

    getNextState(iccid: string) {
        throw new NotFound('To Be Implement');
    }

    getState(iccid: string) {
        throw new NotFound('To Be Implement');
    }
}
