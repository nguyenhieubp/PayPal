const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/User.model");

module.exports.register = async (req, res) => {
  const userNew = new User(req.body);
  const token = jwt.sign({ userId: userNew._id }, process.env.SECRET);
  try {
    await userNew.save();
    res.status(201).json({ message: "success", user: userNew, token });
  } catch (error) {
    res.status(401).json("Not register");
  }
};

module.exports.login = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      const err = new Error("Not matches email. Please register email");
      err.statusCode = 400;
      return next(err);
    }
    if (bcrypt.compareSync(req.body.password, user.password)) {
      const token = jwt.sign({ userId: user._id }, process.env.SECRET);
      res.status(201).json({ message: "success", user: user, token });
    } else {
      const err = {
        statusCode: 400,
        message: "Not password email",
      };
      return next(err);
    }
  } catch (error) {
    res.status(401).json({ error });
  }
};

module.exports.checkCurrentUser = async (req, res, next) => {
  try {
    const data = { user: null };
    if (req.user) {
      const user = await User.findById(req.user);
      data.user = user.name;
    }
    res.json({ message: "success", data: data });
  } catch (error) {
    res.status(400).json({ message: `Error` });
  }
};
