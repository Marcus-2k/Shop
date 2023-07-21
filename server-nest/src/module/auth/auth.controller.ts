import {
  Controller,
  Get,
  Post,
  Res,
  Req,
  Body,
  ValidationPipe,
  UsePipes,
} from "@nestjs/common";
import { Request, Response } from "express";
import { AuthService } from "./auth.service";
import { TokenService } from "../token/token.service";
import { LoginDto, RegisterDto } from "./auth.dto";
import { AccountUserService } from "../account-user/account-user.service";
import { User } from "src/shared/interfaces/schemas/User";
import { Tokens } from "src/shared/interfaces/tokens";
import { Token } from "src/shared/interfaces/schemas/Token";
import { TokenData } from "src/shared/interfaces/token-data";
import { MessageRes } from "src/shared/interfaces/res/message";

@Controller("auth")
/** Pipes */
@UsePipes(new ValidationPipe({ transform: true }))
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly tokenService: TokenService,
    private readonly userService: AccountUserService
  ) {}

  @Post("login")
  public async login(
    @Res() response: Response<any>,
    @Body() body: LoginDto
  ): Promise<Response<any>> {
    const user: User | null = await this.userService.findByEmail(body.email);

    if (user) {
      const passwordValid: boolean = await this.authService.passwordCompare(
        body.password,
        user.password
      );

      if (passwordValid) {
        const tokens: Tokens = this.tokenService.generateTokens({
          id: user._id,
          email: user.email,
        });

        await this.tokenService.saveToken(user._id, tokens.refreshToken);

        response.cookie("refreshToken", tokens.refreshToken, {
          maxAge: 30 * 24 * 60 * 60 * 1000,
          httpOnly: true,
        });

        return response.status(201).json(tokens);
      } else {
        return response.status(400).json({
          message: "Неправильний пароль",
        });
      }
    } else {
      return response.status(404).json({
        message: "Користувач не існує",
      });
    }
  }

  @Post("register")
  public async register(
    @Res() response: Response<any>,
    @Body() body: RegisterDto
  ): Promise<Response<any>> {
    const user: User = await this.userService.findByEmail(body.email);

    if (user) {
      return response.status(409).json({
        message: "Користувача з такою адресою вже створено, виберіть іншу",
      });
    } else {
      const hashPassword = await this.authService.hashPassword(body.password);

      const user = await this.userService.create(
        body.name,
        body.email,
        hashPassword
      );

      const tokens: Tokens = this.tokenService.generateTokens({
        id: user._id,
        email: user.email,
      });

      await this.tokenService.saveToken(user._id, tokens.refreshToken);

      response.cookie("refreshToken", tokens.refreshToken, {
        httpOnly: true,
        maxAge: 30 * 24 * 60 * 60 * 1000,
      });

      return response.status(201).json(tokens);
    }
  }

  @Get("checking")
  public async checking(
    @Res() response: Response<{ authorization: boolean }>,
    @Req() request: Request
  ): Promise<Response<{ authorization: boolean }>> {
    const { refreshToken }: { refreshToken: string | undefined } =
      request.cookies;

    const accessToken: string = request.headers.authorization;

    const validateAccess: TokenData | null =
      this.tokenService.validateAccessToken(accessToken);

    const validateRefresh: TokenData | null =
      this.tokenService.validateRefreshToken(refreshToken);

    const refreshTokenDB: Token = await this.tokenService.findToken(
      refreshToken
    );

    if (!validateAccess || !validateRefresh || !refreshTokenDB) {
      return response.status(401).json({ authorization: false });
    }

    return response.status(200).json({ authorization: true });
  }

  @Get("refresh")
  public async refresh(
    @Res() response: Response<Tokens | MessageRes>,
    @Req() request: Request
  ): Promise<Response<Tokens>> {
    const { refreshToken }: { refreshToken: string | undefined } =
      request.cookies;

    if (!refreshToken) {
      return response
        .status(401)
        .json({ message: "Користувач не авторизований" });
    }

    const tokenData: TokenData =
      this.tokenService.validateRefreshToken(refreshToken);

    const refreshTokenDB: Token = await this.tokenService.findToken(
      refreshToken
    );

    if (!tokenData || !refreshTokenDB) {
      return response
        .status(401)
        .json({ message: "Користувач не авторизований" });
    }

    const user: User = await this.userService.findById(tokenData.id);

    const tokens: Tokens = this.tokenService.generateTokens({
      id: user._id,
      email: user.email,
    });

    await this.tokenService.saveToken(tokenData.id, tokens.refreshToken);

    response.cookie("refreshToken", tokens.refreshToken, {
      maxAge: 30 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });

    return response.status(200).json(tokens);
  }

  @Get("logout")
  public async logout(
    @Res() response: Response<{ deletedCount: number }>,
    @Req() request: Request
  ): Promise<Response<{ deletedCount: number }>> {
    const { refreshToken }: { refreshToken: string | undefined } =
      request.cookies;

    const token: { deletedCount: number } = await this.tokenService.removeToken(
      refreshToken
    );

    response.clearCookie("refreshToken");

    return response.status(200).json(token);
  }
}
