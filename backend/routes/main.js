const express = require('express');
const router = express.Router();

router.get('/', (res, req) => {
  console.log('hey ya');
});

module.exports = router;
