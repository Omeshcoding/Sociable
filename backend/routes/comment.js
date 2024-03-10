const express = require('express');
const router = express.Router();
const commentController = require('../controller/comment');

router.get('/', commentController.getComment);
router.get('/:id', commentController.getSingleComment);
router.post('/postcomment/:id', commentController.postComment);
router.delete('/deletecomment/:id', commentController.deleteComment);

module.exports = router;
