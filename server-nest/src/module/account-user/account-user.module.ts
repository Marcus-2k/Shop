import { Module } from "@nestjs/common";
import { AccountUserController } from "./account-user.controller";
import { AccountUserService } from "./account-user.service";
import { DatabaseModule } from "../database/database.module";

@Module({
  imports: [DatabaseModule],
  controllers: [AccountUserController],
  providers: [AccountUserService],
  exports: [AccountUserService],
})
export class AccountUserModule {}
