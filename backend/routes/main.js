const express = require('express');
const router = express.Router();
const postController = require('../controller/posts');
const userController = require('../controller/users');
const loginRouter = require('../controller/login');

router.get('/posts', postController.getFeed);

router.get('/users', userController.getUser);

router.post('/signup', userController.userSignup);

router.post('/login', loginRouter.login);
module.exports = router;
