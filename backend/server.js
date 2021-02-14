const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');
const errorMiddleware = require('./middleware/errorMiddleware');

dotenv.config();

connectDB();

const app = express();

app.get('/', (req, res) => {
  res.send('API is running');
});

app.get('/api/home', (req, res) => {
  res.json(products);
});

app.use('/api/products', productRoutes);

app.use(errorMiddleware.notFound);
app.use(errorMiddleware.errorHandler);

const PORT = 5000 || process.env.PORT;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));
