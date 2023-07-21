import { Module } from "@nestjs/common";
import { GuestController } from "./guest.controller";
import { DatabaseModule } from "../database/database.module";
import { GuestService } from "./guest.service";
import { ProductModule } from "../product/product.module";

@Module({
  imports: [DatabaseModule, ProductModule],
  controllers: [GuestController],
  providers: [GuestService],
})
export class GuestModule {}
