const swaggerDef = {
    openapi: "3.0.0",
    info: {
      title: "Logistics API",
      version: "1.0.0",
      description: "API for managing logistics data",
    },
    servers: [
      {
        url: "https://backend-logistik.vercel.app",
        description: "Development server",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  };
  
  module.exports = swaggerDef;
  