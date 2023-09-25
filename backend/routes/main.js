const express = require('express');
const router = express.Router();
const postController = require('../controller/posts');

router.get('/', postController.getFeed);

module.exports = router;
