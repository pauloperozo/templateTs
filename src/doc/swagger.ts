import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Application } from 'express';
import { Definition } from './definition';

const swaggerOptions = {
    swaggerDefinition: Definition,
    apis: ['src/doc/*ts']
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

export const swaggerDocs = (app: Application) => {
    app.use(
        '/docs',
        swaggerUi.serve,
        swaggerUi.setup(swaggerSpec, {
            explorer: true,
            customCss:
                'https://cdn.jsdelivr.net/npm/swagger-ui-themes@3.0.0/themes/3.x/theme-outline.css',
            customSiteTitle: 'Holafly Center API Documentation'
        })
    );
};
