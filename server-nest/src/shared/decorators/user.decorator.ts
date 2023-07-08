import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { TokenData } from "../interfaces/token-data";

export const User = createParamDecorator(
  (data: undefined, ctx: ExecutionContext): TokenData => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
  }
);
