const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const User = require('../models/user');

module.exports = {
  login: async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    const passwordCorrect =
      user === null ? false : await bcrypt.compare(password, user.passwordHash);

    if (!(user && passwordCorrect)) {
      return res.status(401).json({
        error: 'invalid email or password',
      });
    }

    const userForToken = {
      email: user.email,
      id: user._id,
    };
    const token = jwt.sign(userForToken, process.env.SECRET, {
      expiresIn: '1h',
    });

    res.status(200).send({ token, email: user.email, name: user.name });
  },
};
