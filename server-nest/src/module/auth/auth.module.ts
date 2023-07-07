import { Module } from "@nestjs/common";

import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";

// Modules
import { DatabaseModule } from "../database/database.module";
import { TokenModule } from "../token/token.module";
import { AccountUserModule } from "../account-user/account-user.module";

@Module({
  imports: [DatabaseModule, TokenModule, AccountUserModule],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}
