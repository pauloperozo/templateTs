import { Model, ModelCtor } from 'sequelize';
declare module '@holafly/core' {
    export type ModelCore = ModelCtor<Model<any, any>>;

    export const db: any;
    export const dbEsim: any;
    export const dbCustomers: {
        BlockedCustomer: ModelCore;
        Customer: ModelCore;
        CustomerCard: ModelCore;
        CustomerMail: ModelCore;
        CustomerPhoneCode: ModelCore;
        CustomerProfile: ModelCore;
    };
    export const dbShortener: any;
    export const dbProvider3AU: any;
    export const services: any;
    export const ProviderFactory: any;
    export const lib: any;
}
