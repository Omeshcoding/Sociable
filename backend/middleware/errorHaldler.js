const errorHandler = (error, req, res, next) => {
  if (error.code === 11000) {
    console.error('Duplicate key error', error.message);
    res.status(400).json({ error: 'Duplicate key error' });
  } else {
    console.error('MongoDB Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }

  if (error.name === 'JsonWebTokenError') {
    return res.status(401).json({ error: error.message });
  } else if (error.name === 'TokenExpiredError') {
    return res.status(401).json({ error: 'token expired' });
  }
  next(error);
};

module.exports = errorHandler;
