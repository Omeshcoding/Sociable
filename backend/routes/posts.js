const express = require('express');
const postRouter = express.Router();
const postController = require('../controller/posts');
const { userExtractor } = require('../middleware/auth');

postRouter.get('/:id', postController.getSinglePost);

postRouter.post('/createPost', userExtractor, postController.createPost);

postRouter.delete('/deletePost/:id', userExtractor, postController.deletePost);

postRouter.put('/likePost/:id', postController.likePost);

module.exports = postRouter;
