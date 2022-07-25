const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const jwt_decode = require("jwt-decode");
const keys = require("../config/keys");
// Model
const User = require("../models/User");
const Token = require("../models/Token");

module.exports.login = async function (req, res) {
  console.log("Server login");
  try {
    const candidate = await User.findOne({ email: req.body.email });
    if (candidate) {
      const passwordResult = bcrypt.compareSync(
        req.body.password,
        candidate.password
      ); // Перевіка чи правильно користувач ввів пароль
      if (passwordResult) {
        const tokenDB = await new Token({
          user_id: candidate._id,
        }); // ID токена користувача який ввійшов в систему
        const token = jwt.sign(
          {
            email: candidate.email,
            userId: candidate._id,
            tokenId: tokenDB._id,
          },
          keys.jwt,
          { expiresIn: "24h" }
        );

        tokenDB.save(); // Токен користувача який в системі
        res.status(200).json({
          token: `Bearer ${token}`,
        });
      } else {
        res.status(401).json({
          message: "Не вірний пароль або пошта.",
        });
      }
    } else {
      res.status(404).json({
        message: "Користувача з такою поштою не знайдено.",
      });
    }
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Сталася помилка на серверові. Спробуйте пізніше." });
  }
};

module.exports.register = async function (req, res) {
  console.log("Server register");
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

module.exports.logout = async function (req, res) {
  console.log("Server logout");
  try {
    const tokenDecode = jwt_decode(req.headers.authorization); // Декодіровка jwt токена

    const user = await User.findById(tokenDecode.userId).catch((error) => {
      console.log(error);
      res.status(404).json({ message: "Такого користувача не знайдено" });
    }); // Користувач який нажав "Logout"

    const token = await Token.findById(tokenDecode.tokenId).catch((error) => {
      console.log(error);
      res.status(404).json({ message: "Не коректний токен" });
    }); // Токен який потрібно видалити з БД

    if (user && token) {
      await Token.findByIdAndRemove(tokenDecode.tokenId)
        .then(() => {
          res.status(200).json({ message: "Токен видалено" });
        })
        .catch((error) => {
          console.log(error);
          res.status(500).json({
            message: "Токен не видалено",
          });
        });
    } else {
      res.status(500).json({
        message: "User and Token undefined",
      });
    }
    // Якщо в БД є токен який потрібно видалити
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Сталася помилка на серверові. Спробуйте пізніше." });
  }
};
