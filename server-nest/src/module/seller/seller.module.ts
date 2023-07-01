import { Module } from "@nestjs/common";
import { SellerController } from "./seller.controller";
import { DatabaseModule } from "../database/database.module";

@Module({
  imports: [DatabaseModule],
  controllers: [SellerController],
})
export class SellerModule {}
