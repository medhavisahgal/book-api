const express= require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());
mongoose.connect('yourconnectionstring',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});
app.use('/api/books',require('./routes/books'));
app.get("/", (req, res) => {
  res.send("Welcome to the Book API! 📚");
});
app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
});
