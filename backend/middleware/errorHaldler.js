const errorHandler = (error, req, res, next) => {
  console.log(error.message);
  if (error.name === 'JsonWebTokenError') {
    return res.status(401).json({ error: error.message });
  } else if (error.name === 'TokenExpiredError') {
    return res.status(401).json({ error: 'token expired' });
  }
  next(error);
};

module.exports = errorHandler;
