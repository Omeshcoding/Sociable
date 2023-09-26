const express = require('express');
const postRouter = express.Router();
const postController = require('../controller/posts');

postRouter.get('/:id', postController.getSinglePost);

postRouter.post('/createPost', postController.createPost);

postRouter.delete('/deletePost/:id', postController.deletePost);

module.exports = postRouter;
