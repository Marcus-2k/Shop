import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

/** Interface */
import { Token } from "src/shared/interfaces/schemas/Token";
import { Tokens } from "src/shared/interfaces/tokens";
import { TokenData } from "src/shared/interfaces/token-data";
import { TokenPayload } from "src/shared/interfaces/token-payload";

@Injectable()
export class TokenService {
  constructor(
    @InjectModel("token") private readonly TokenModel: Model<Token>,
    private readonly jwtService: JwtService
  ) {}

  public generateTokens(payload: TokenPayload): Tokens {
    const accessToken: string = this.jwtService.sign(payload, {
      secret: process.env.ACCESS_SECRET_JWT,
      expiresIn: "12h",
    });

    const refreshToken: string = this.jwtService.sign(payload, {
      secret: process.env.REFRESH_SECRET_JWT,
      expiresIn: "30d",
    });

    return { accessToken: `Bearer ${accessToken}`, refreshToken };
  }

  public async findToken(token: string): Promise<Token> {
    return await this.TokenModel.findOne({ refreshToken: token });
  }

  public validateAccessToken(token: string): TokenData | null {
    try {
      return this.jwtService.verify(token.split(" ")[1], {
        secret: process.env.ACCESS_SECRET_JWT,
      });
    } catch (error) {
      return null;
    }
  }

  public validateRefreshToken(token: string): TokenData | null {
    try {
      return this.jwtService.verify(token, {
        secret: process.env.REFRESH_SECRET_JWT,
      });
    } catch (error) {
      return null;
    }
  }

  public async saveToken(user_id: string, token: string): Promise<Token> {
    const tokenData: Token = await this.TokenModel.findOne({ user: user_id });

    if (tokenData) {
      tokenData.refreshToken = token;

      return await tokenData.save();
    } else {
      return await this.TokenModel.create({
        user: user_id,
        refreshToken: token,
      });
    }
  }

  public async removeToken(token: string): Promise<{ deletedCount: number }> {
    return await this.TokenModel.deleteOne({ refreshToken: token });
  }
}
