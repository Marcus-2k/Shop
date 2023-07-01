import { Module } from "@nestjs/common";
import { AccountUserController } from "./account-user.controller";

@Module({
  controllers: [AccountUserController],
})
export class AccountUserModule {}
