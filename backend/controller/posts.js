const Post = require('../models/Post');
const User = require('../models/user');

module.exports = {
  getFeed: async (req, res) => {
    try {
      const posts = await Post.find({}).populate('user', {
        username: 1,
        name: 1,
      });
      res.json(posts);
    } catch (error) {
      console.log(error);
    }
  },
  getSinglePost: async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      res.json(post);
    } catch (error) {
      console.log(error);
    }
  },
  createPost: async (req, res) => {
    const body = req.body;
    const user = await User.findById(body.userId);
    const post = new Post({
      title: body.title,
      image: body.image,
      caption: body.caption,
      likes: body.likes,
      user: user.id,
    });
    const savedPost = await post.save();
    user.posts = user.posts.concat(savedPost._id);
    await user.save();
    res.status(201).json(post);
  },
  deletePost: async (req, res) => {
    try {
      await Post.findByIdAndRemove(req.params.id);
      console.log('post  delete');
      res.status(204).end();
    } catch (error) {
      console.log(error);
    }
  },
};
