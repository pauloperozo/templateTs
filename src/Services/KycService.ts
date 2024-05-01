import 'reflect-metadata';
import { injectable } from 'inversify';

@injectable()
export class KycService {
    DownloadXLSX() {
        return { message: 'To Be Implement' };
    }

    SendMailXLSX(email: string) {
        return { message: `To Be Implement` };
    }
}
