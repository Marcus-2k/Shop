const bcrypt = require("bcryptjs");

const UserDto = require("../dtos/user-dto");
const UserModel = require("../models/User");

const TokenService = require("../service/token-service");

module.exports.login = async function (req, res) {
  console.log("Server login");

  try {
    const user = await UserModel.findOne({ email: req.body.email });

    if (user) {
      const passwordValid = bcrypt.compareSync(
        req.body.password,
        user.password
      ); // Перевіка чи правильно користувач ввів пароль >> true || false

      if (passwordValid) {
        const userDto = new UserDto(user);

        const tokens = TokenService.generateTokens({ ...userDto });

        await TokenService.saveToken(userDto.id, tokens.refreshToken);

        res.cookie("refreshToken", tokens.refreshToken, {
          maxAge: 30 * 24 * 60 * 60 * 1000,
          httpOnly: true,
        });

        return res.status(201).json(tokens);
      } else {
        return res.status(404).json({
          message: "Не вірний пароль.",
        });
      }
    } else {
      return res.status(404).json({
        message: "Користувача з такою поштою не знайдено.",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};

module.exports.register = async function (req, res) {
  console.log("Server register");

  try {
    const candidate = await UserModel.findOne({ email: req.body.email });

    if (candidate) {
      return res.status(409).json({
        message: "Користувач з таким емейлом уже створений, виберіть інший.",
      });
    } else {
      const salt = bcrypt.genSaltSync(10);
      const hashPassword = bcrypt.hashSync(req.body.password, salt);

      const user = await UserModel.create({
        avatar: null,
        name: req.body.name.split(/\s+/).join(""),
        lastName: null,
        email: req.body.email,
        birthday: null,
        country: null,
        password: hashPassword,
        history__view: [],
        favorite: [],
        shoppingCart: [],
      });

      const userDto = new UserDto(user);
      const tokens = TokenService.generateTokens({ ...userDto });

      await TokenService.saveToken(userDto.id, tokens.refreshToken);

      res.cookie("refreshToken", tokens.refreshToken, {
        httpOnly: true,
        maxAge: 30 * 24 * 60 * 60 * 1000,
      });

      return res.status(201).json(tokens);
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};

module.exports.checking = async function (req, res) {
  console.log("Server checking");

  try {
    const { refreshToken } = req.cookies;

    const userData = TokenService.validateRefreshToken(refreshToken);
    const tokenFromDB = await TokenService.findToken(refreshToken);
    if (!userData || !tokenFromDB) {
      return res.status(401);
    }

    return res.status(200).json({ authorization: true });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};

module.exports.refresh = async function (req, res) {
  console.log("Server refresh");

  try {
    const { refreshToken } = req.cookies;
    if (!refreshToken) {
      return res.status(401).json({ message: "Користувач не авторизований" });
    }

    const userData = TokenService.validateRefreshToken(refreshToken);
    const tokenFromDB = await TokenService.findToken(refreshToken);
    if (!userData || !tokenFromDB) {
      return res.status(401).json({ message: "Користувач не авторизований" });
    }

    const user = await UserModel.findById(userData.id);
    const userDto = new UserDto(user);
    const tokens = TokenService.generateTokens({ ...userDto });
    await TokenService.saveToken(userDto.id, tokens.refreshToken);

    res.cookie("refreshToken", tokens.refreshToken, {
      maxAge: 30 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });

    return res.status(200).json(tokens);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};

module.exports.logout = async function (req, res) {
  console.log("Server logout");

  try {
    const { refreshToken } = req.cookies;

    const token = await TokenService.removeToken(refreshToken);

    res.clearCookie("refreshToken");

    return res.status(200).json(token);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};
