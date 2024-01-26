const express = require('express');
const authRoutes = require('./src/routes/authRoutes');
const bookRoutes = require('./src/routes/bookRoutes');

const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const dbUrl = process.env.DB_URL;

mongoose.connect(dbUrl)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB:', err));

const app = express();


app.use(express.json());

app.use("/trial",(req,res)=>{
  res.send("trial working");
})
app.use('/api', authRoutes);
app.use('/api', bookRoutes);


module.exports = app; // Export the server instance for testing

// module.exports.handler=serverless(app);