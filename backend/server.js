const express = require('express');
const dotenv = require('dotenv');
const products = require('./data/products');
const connectDB = require('./config/db');

dotenv.config();

connectDB();

const app = express();

app.get('/', (req, res) => {
  res.send('API is running');
});

app.get('/api/home', (req, res) => {
  res.json(products);
});

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

const PORT = 5000 || process.env.PORT;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));
