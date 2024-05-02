import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Router } from 'express';
import { Definition } from './definition';

export const swaggerRoute = (path: string) => {
    const swaggerOptions = {
        swaggerDefinition: Definition,
        apis: ['src/doc/*ts']
    };

    const swaggerSpec = swaggerJSDoc(swaggerOptions);

    const router = Router();
    return router.use(
        path,
        swaggerUi.serve,
        swaggerUi.setup(swaggerSpec, {
            explorer: true,
            customCss:
                'https://cdn.jsdelivr.net/npm/swagger-ui-themes@3.0.0/themes/3.x/theme-outline.css',
            customSiteTitle: 'Holafly Center API Documentation'
        })
    );
};
