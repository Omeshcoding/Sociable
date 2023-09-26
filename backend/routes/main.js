const express = require('express');
const router = express.Router();
const postController = require('../controller/posts');
const authController = require('../controller/users');

router.get('/', postController.getFeed);

router.get('/users', authController.getUser);

router.post('/signup', authController.userSignup);

module.exports = router;
