import { SwaggerDefinition } from 'swagger-jsdoc';

export const Definition: SwaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'Holafly Center API',
        description: '',
        contact: { email: 'santiago@holafly.com' },
        version: '0.0.1'
    },

    servers: [
        {
            url: 'http://localhost:3000'
        },
        {
            url: 'https://customers.holafly.com'
        },
        {
            url: 'https://dev.customers.holafly.com'
        }
    ],
    tags: [
        { name: 'test', description: 'Operations about test' },
        { name: 'user', description: 'Operations about user' },
        { name: 'kyc', description: 'Operations about kyc' }
    ],

    paths: {
        '/test': {
            get: {
                tags: ['test'],
                summary: 'Returns Service status',
                responses: {
                    '200': {
                        description: 'successful operation',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'object',
                                    properties: {
                                        message: {
                                            type: 'string',
                                            example: 'Hfc-express-api'
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};
