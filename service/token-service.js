const jwt = require("jsonwebtoken");
const TokenModel = require("../models/Token");

class TokenService {
  generateTokens(payload) {
    const accessToken = jwt.sign(payload, process.env.ACCESS_SECRET_JWT, {
      expiresIn: "12h",
    });

    const refreshToken = jwt.sign(payload, process.env.REFRESH_SECRET_JWT, {
      expiresIn: "7d",
    });

    return { accessToken: `Bearer ${accessToken}`, refreshToken };
  }

  validateAccessToken(token) {
    try {
      const userData = jwt.verify(token, process.env.ACCESS_SECRET_JWT);
      return userData;
    } catch (error) {
      return null;
    }
  }

  validateRefreshToken(token) {
    try {
      const userData = jwt.verify(token, process.env.REFRESH_SECRET_JWT);
      return userData;
    } catch (error) {
      return null;
    }
  }

  async findToken(refreshToken) {
    const tokenData = await TokenModel.findOne({ refreshToken });

    return tokenData;
  }

  async saveToken(user_id, refreshToken) {
    const tokenData = await TokenModel.findOne({ user: user_id });

    if (tokenData) {
      tokenData.refreshToken = refreshToken;

      return tokenData.save();
    } else {
      const token = await TokenModel.create({ user: user_id, refreshToken });

      return token;
    }
  }

  async removeToken(refreshToken) {
    const tokenData = await TokenModel.deleteOne({ refreshToken });

    return tokenData;
  }
}

module.exports = new TokenService();
