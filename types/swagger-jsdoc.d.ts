declare module 'swagger-jsdoc' {
  interface SwaggerJsdocOptions {
    definition: {
      openapi: string;
      info: {
        title: string;
        version: string;
        description?: string;
      };
      servers?: Array<{
        url: string;
        description?: string;
      }>;
    };
    apis: string[];
  }

  function swaggerJsdoc(options: SwaggerJsdocOptions): any;

  export = swaggerJsdoc;
}