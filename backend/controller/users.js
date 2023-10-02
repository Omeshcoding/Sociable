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
    const { email, name, password } = req.body;
    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);
    const user = new User({
      email,
      name,
      passwordHash,
    });
    const savedUser = await user.save();

    res.status(201).json(savedUser);
  },
};
