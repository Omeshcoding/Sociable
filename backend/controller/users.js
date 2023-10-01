const bcrypt = require('bcrypt');
const User = require('../models/user');

// usersRouter.post('/',

module.exports = {
  getUser: async (req, res) => {
    const users = await User.find({}).populate('posts', {
      title: 1,
      image: 1,
      caption: 1,
      likes: 1,
    });
    res.json(users);
  },

  userSignup: async (req, res) => {
    const { username, name, password } = req.body;
    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);
    const user = await User.create({
      username,
      name,
      passwordHash,
    });
    res.status(201).json(user);
  },
};
