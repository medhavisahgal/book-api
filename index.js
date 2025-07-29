const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());
const { swaggerUi, swaggerSpec } = require('./swagger');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.get('/swagger.json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});

app.use('/api/books', require('./routes/books'));

app.get("/", (req, res) => {
  res.send("Welcome to the Book API! 📚");
});

if (require.main === module) {
  require('dotenv').config();
  const connectDB = require('./db');
  connectDB(process.env.MONGODB_URI)
    .then(() => {
      app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
        console.log(`Swagger API docs available at http://localhost:${port}/api-docs`);
        console.log(`Swagger JSON available at http://localhost:${port}/swagger.json`);
      });
    });
}

module.exports = app;
