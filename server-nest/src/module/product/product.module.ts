import { Module } from "@nestjs/common";
import { ProductController } from "./product.controller";
import { DatabaseModule } from "../database/database.module";

@Module({
  imports: [DatabaseModule],
  controllers: [ProductController],
  providers: [],
})
export class ProductModule {}
