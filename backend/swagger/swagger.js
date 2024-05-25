const swaggerJsDoc = require('swagger-jsdoc');
require('dotenv').config(); // Charger les variables d'environnement

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Carambar & Co API',
      version: '1.0.0',
      description: 'API pour la gestion des blagues de Carambar & Co',
      contact: {
        name: 'Carambar & Co',
      },
      servers: [{
        url: process.env.API_URL || 'http://localhost:3000', // Utiliser l'URL de l'API définie dans les variables d'environnement, sinon utiliser localhost
      }],
    },
  },
  apis: ['./routes/*.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = swaggerDocs;
