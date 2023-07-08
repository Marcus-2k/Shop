import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { TokenService } from "./token.service";
import { DatabaseModule } from "../database/database.module";
import { JwtStrategy } from "src/shared/middleware/passport.middleware";

@Module({
  imports: [JwtModule, DatabaseModule],
  providers: [TokenService, JwtStrategy],
  exports: [TokenService],
})
export class TokenModule {}
