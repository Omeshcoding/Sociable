const Comment = require('../models/Comment');
const Post = require('../models/Post');
const User = require('../models/user');

module.exports = {
  getComment: async (req, res) => {
    try {
      const comments = await Comment.find({});
      res.json(comments);
    } catch (error) {
      console.log(error);
    }
  },
  getSingleComment: async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      // console.log(post);
      res.json(post);
    } catch (error) {
      console.log(error);
    }
  },
  postComment: async (req, res) => {
    const body = req.body;
    const postId = req.params.id;
    try {
      const post = await Post.findById(postId);
      const user = await User.findById(body.user);
      if (!post) {
        return res.status(404).json({ error: 'Post not found' });
      }

      const comment = new Comment({
        text: body.comment,
        user: body.user,
        username: user.name,
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
  deleteComment: async (req, res) => {
    const comment = await Comment.findById(req.params.id);
    const userId = req.query?.userId;
    const user = comment?.user.toString();

    if (userId === user) {
      await Comment.findByIdAndRemove(req.params.id);
      res.status(204).end();
    } else {
      res
        .status(401)
        .json({ error: 'invalid user sign in from different account' })
        .end();
    }
  },
};
