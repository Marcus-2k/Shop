import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { COOKIES } from "../interfaces/cookies";

export const Cookies = createParamDecorator(
  (data: undefined, ctx: ExecutionContext): COOKIES => {
    const request = ctx.switchToHttp().getRequest();
    return request.cookies;
  }
);
