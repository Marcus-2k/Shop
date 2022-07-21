const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const keys = require("../config/keys");
const errorHandler = require("../utils/errorHandler");

module.exports.login = async function (req, res) {
  const candidate = await User.findOne({ email: req.body.email });
  if (candidate) {
    const passwordResult = bcrypt.compareSync(
      req.body.password,
      candidate.password
    );
    if (passwordResult) {
      const token = jwt.sign(
        {
          email: candidate.email,
          userId: candidate._id,
        },
        keys.jwt,
        { expiresIn: 60 * 60 }
      );
      res.status(200).json({
        token: `Bearer ${token}`,
      });
    } else {
      res.status(401).json({
        message: "Блять ти тупий, пароль забув чи шо?",
      });
    }
  } else {
    res.status(404).json({
      message: "Користувача з такою поштою не знайдено",
    });
  }
};

module.exports.register = async function (req, res) {
  const candidate = await User.findOne({ email: req.body.email });
  if (candidate) {
    res.status(409).json({
      message: "Користувач з цим емейлом уже створений, виберіть інший.",
    });
  } else {
    const salt = bcrypt.genSaltSync(10);
    const password = req.body.password;
    const user = new User({
      avatar: "",
      name: req.body.name,
      lastName: null,
      email: req.body.email,
      birthday: null,
      country: null,
      password: bcrypt.hashSync(password, salt),
    });
    try {
      await user.save();
      res.status(201).json({ user });
    } catch (error) {
      errorHandler(res, e);
    }
  }
};
