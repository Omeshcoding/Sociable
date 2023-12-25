const express = require('express');
const postRouter = express.Router();
const postController = require('../controller/posts');
const { userExtractor } = require('../middleware/auth');
const upload = require('../middleware/multer');

// routes
postRouter.get('/:id', userExtractor, postController.getSinglePost);

postRouter.post(
  '/createPost',
  userExtractor,
  upload.single('file'),
  postController.createPost
);

postRouter.delete('/deletePost/:id', userExtractor, postController.deletePost);

postRouter.put('/likePost/:id', postController.likePost);

postRouter.put('/:id', postController.updatePost);

module.exports = postRouter;
