const Post = require('../models/Post');

module.exports = {
  getFeed: async (req, res) => {
    try {
      const posts = await Post.find({});
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

    const post = await Post.create({
      title: body.title,
      image: body.image,
      caption: body.caption,
      likes: body.likes,
    });
    console.log('post added');
    res.status(201).json();
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
