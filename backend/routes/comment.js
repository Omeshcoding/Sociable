const express = require('express');
const router = express.Router();
const commentController = require('../controller/comment');

router.get('/', commentController.getComment);
router.get('/:id', commentController.getSingleComment);
router.post('/:id', commentController.postComments);

module.exports = router;
