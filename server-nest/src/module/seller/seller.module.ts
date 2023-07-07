import { Module } from "@nestjs/common";
import { SellerController } from "./seller.controller";
import { DatabaseModule } from "../database/database.module";
import { SellerService } from "./seller.service";

@Module({
  imports: [DatabaseModule],
  controllers: [SellerController],
  providers: [SellerService],
  exports: [SellerService],
})
export class SellerModule {}
