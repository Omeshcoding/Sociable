// const { res } = require('express');
const Post = require('../models/Post');
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const cloudinary = require('../middleware/cloudinary');

module.exports = {
  getFeed: async (req, res) => {
    try {
      const posts = await Post.find({})
        .populate('comments', {
          text: 1,
          user: 1,
          createdAt: 1,
          username: 1,
          post: 1,
        })
        .populate('user', {
          email: 1,
          name: 1,
        });
      res.json(posts);
    } catch (error) {
      console.log(error);
    }
  },
  getSinglePost: async (req, res) => {
    try {
      const post = await Post.findById(req.params.id).populate('comments', {
        text: 1,
        user: 1,
        createdAt: 1,
        username: 1,
        post: 1,
      });
      res.json(post);
    } catch (error) {
      console.log(error);
    }
  },
  createPost: async (req, res) => {
    const body = req.body;
    const decodedToken = jwt.verify(req.token, process.env.SECRET);
    if (!decodedToken.id) {
      return res.status(401).json({ error: 'token invalid' });
    }
    const user = await User.findById(decodedToken.id);

    const photoUpload = await cloudinary.uploader.upload(req.file?.path);

    const post = new Post({
      title: body.title,
      image: photoUpload.secure_url || null,
      cloudinaryId: photoUpload.public_id || null,
      caption: body.caption,
      likes: 0,
      user: user._id,
    });
    const savedPost = await post.save();
    user.posts = user.posts.concat(savedPost._id);
    await user.save();
    res.status(201).json(post);
  },
  deletePost: async (req, res) => {
    const user = await Post.findById(req.params.id);
    const userId = user?.user.toString();

    if (userId === req.user) {
      await Post.findByIdAndRemove(req.params.id);
      res.status(204).end();
    } else {
      res
        .status(401)
        .json({ error: 'invalid user sign in from different account' })
        .end();
    }
  },
  likePost: async (req, res) => {
    const { title, author, url, likes } = req.body;
    const post = {
      title: title,
      author: author,
      url: url,
      likes: likes,
    };
    const savedPost = await Post.findByIdAndUpdate(req.params.id, post, {
      new: true,
    });
    res.json(savedPost);
  },
  updatePost: async (req, res) => {
    const { title, caption } = req.body;
    const post = {
      title: title,
      caption: caption,
    };
    const savedPost = await Post.findByIdAndUpdate(req.params.id, post, {
      new: true,
    });
    res.json(savedPost);
  },
};
