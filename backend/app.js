const express = require('express');
const sequelize = require('./config/database');
const jokeRoutes = require('./routes/JokeRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('./swagger/swagger');
const cors = require('cors');
require('dotenv').config(); // Charger les variables d'environnement

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware pour activer CORS
app.use(cors());

app.use(express.json());
app.use('/api', jokeRoutes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});