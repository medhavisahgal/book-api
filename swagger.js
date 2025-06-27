const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Book Manager API',
      version: '1.0.0',
    },
    servers: [
      { url: 'http://localhost:3000' },
    ],
    components: {
      schemas: {
        Book: {
          type: 'object',
          properties: {
            name: { type: 'string', example: 'Book Title' },
            author: { type: 'string', example: 'Author Name' },
            year: { type: 'integer', example: 2024 },
          },
          required: ['name', 'author', 'year'],
        },
      },
    },
  },
  apis: ['./routes/*.js'],
};
const swaggerSpec = swaggerJsdoc(options);
module.exports = { swaggerUi, swaggerSpec };
