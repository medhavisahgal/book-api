const express= require('express');
const cors = require('cors');
const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());
app.use('/api/books',require('./routes/books'));
app.get("/", (req, res) => {
  res.send("Welcome to the Book API! 📚");
});
if (require.main === module) {
  const connectDB = require('./db');
  connectDB('YOUR_MONGODB_URI')
    .then(() => {
      app.listen(port,()=>{
        console.log(`Server is running on http://localhost:${port}`);
      });
    });
}
module.exports = app;