const Comment = require('../models/Comment');
const Post = require('../models/Post');
const User = require('../models/user');

module.exports = {
  getComment: async (req, res) => {
    try {
      const comments = await Comment.find({});
      res.json(comments);
    } catch (error) {}
    console.log(error);
  },
  postComments: async (req, res) => {
    const body = req.body;
    const postId = req.params.id;
    try {
      const post = await Post.findById(postId);
      if (!post) {
        return res.status(404).json({ error: 'Post not found' });
      }

      const comment = new Comment({
        text: body.comment,
        user: body.user,
        post: postId,
      });

      const savedComment = await comment.save();
      console.log(savedComment.id, post.comments);
      post.comments = post.comments.concat(savedComment._id);
      await post.save();
      res.status(201).json(comment);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};
