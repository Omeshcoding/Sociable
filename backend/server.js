const express = require('express');
const app = express();
const dotenv = require('dotenv');
const morgan = require('morgan');
const mainRoutes = require('./routes/main');
const connectToDB = require('./config/db');

// Load configuration
dotenv.config({ path: './.env' });

// Connect to Database
connectToDB();
// Logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.get('/', (res, req) => {
  console.log('hello world');
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(
    `Serrver is running in ${process.env.NODE_ENV} mode on port ${PORT}`
  );
});
