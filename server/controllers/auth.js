import bcrypt from "bcryptjs";
import UserDto from "../dtos/user-dto.js";
import UserModel from "../models/User.js";
import TokenService from "../service/token-service.js";

export async function login(req, res) {
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
}

export async function register(req, res) {
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
}

export async function checking(req, res) {
  console.log("Server checking");

  try {
    const { refreshToken } = req.cookies;
    const accessToken = req.headers.authorization.split(" ")[1];

    const userDataRefresh = TokenService.validateRefreshToken(refreshToken);
    const userDataAccess = TokenService.validateAccessToken(accessToken);
    const tokenFromDB = await TokenService.findToken(refreshToken);

    if (!userDataRefresh || !tokenFromDB || !userDataAccess) {
      return res
        .status(401)
        .json({ authorization: false, message: "Користувач не авторизований" });
    }

    return res
      .status(200)
      .json({ authorization: true, message: "Користувач авторизований" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
}

export async function refresh(req, res) {
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
}

export async function logout(req, res) {
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
}
