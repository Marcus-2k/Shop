import { Module } from "@nestjs/common";
import { OrderController } from "./order.controller";
import { DatabaseModule } from "../database/database.module";
import { OrderService } from "./order.service";
import { ProductModule } from "../product/product.module";

@Module({
  imports: [DatabaseModule, ProductModule],
  controllers: [OrderController],
  providers: [OrderService],
  exports: [OrderService],
})
export class OrderModule {}
