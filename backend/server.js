const express = require('express');
const app = express();
const dotenv = require('dotenv');
const morgan = require('morgan');
const mainRoutes = require('./routes/main');
const postRoutes = require('./routes/posts');
const commentRouter = require('./routes/comment');
const connectToDB = require('./config/db');
const errorHandler = require('./middleware/errorHaldler');
const middleware = require('./middleware/auth');
const cors = require('cors');

// Load configuration
dotenv.config({ path: './.env' });

// Connect to Database
connectToDB();

// Body Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
// Routes that server is listening to

app.use(cors());
app.use(middleware.tokenExtractor);
app.use('/', mainRoutes);
app.use('/post', postRoutes);
app.use('/comment', commentRouter);

app.use(errorHandler);
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(
    `Serrver is running in ${process.env.NODE_ENV} mode on port ${PORT}`
  );
});
