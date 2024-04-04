import { Module } from "@nestjs/common";
import { AccountUserModule } from "../account-user/account-user.module";
import { DatabaseModule } from "../database/database.module";
import { TokenModule } from "../token/token.module";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";

@Module({
  imports: [DatabaseModule, TokenModule, AccountUserModule],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}
