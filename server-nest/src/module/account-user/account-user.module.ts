import { Module } from "@nestjs/common";
import { AccountUserController } from "./account-user.controller";
import { AccountUserService } from "./account-user.service";
import { DatabaseModule } from "../database/database.module";
import { ProductModule } from "../product/product.module";

@Module({
  imports: [DatabaseModule, ProductModule],
  controllers: [AccountUserController],
  providers: [AccountUserService],
  exports: [AccountUserService],
})
export class AccountUserModule {}
