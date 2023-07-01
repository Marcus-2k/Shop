import { Module } from "@nestjs/common";
import { OrderController } from "./order.controller";
import { DatabaseModule } from "../database/database.module";

@Module({
  imports: [DatabaseModule],
  controllers: [OrderController],
})
export class OrderModule {}
