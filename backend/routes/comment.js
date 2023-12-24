const express = require('express');
const router = express.Router();
const commentController = require('../controller/comment');

router.get('/', commentController.getComment);
router.post('/:id', commentController.postComments);

module.exports = router;
