declare module '@holafly/core' {
    type Model = import('sequelize').ModelCtor<import('sequelize').Model<any, any>>;

    export const db: any;
    export const dbEsim: any;
    export const dbCustomers: {
        BlockedCustomer: Model;
        Customer: Model;
        CustomerCard: Model;
        CustomerMail: Model;
        CustomerPhoneCode: Model;
        CustomerProfile: Model;
    };
    export const dbShortener: any;
    export const dbProvider3AU: any;
    export const services: any;
    export const ProviderFactory: any;
    export const lib: any;
}
