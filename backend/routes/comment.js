const express = require('express');
const router = express.Router();
const commentController = require('../controller/comment');
const { userExtractor } = require('../middleware/auth');

router.get('/', commentController.getComment);
router.get('/:id', commentController.getSingleComment);
router.post('/postcomment/:id', commentController.postComment);
router.delete(
  '/deletecomment/:id',
  userExtractor,
  commentController.deleteComment
);

module.exports = router;
