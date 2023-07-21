import { Module } from "@nestjs/common";
import { ProductController } from "./product.controller";
import { DatabaseModule } from "../database/database.module";
import { ProductService } from "./product.service";
import { CategoryModule } from "../category/category.module";

@Module({
  imports: [DatabaseModule, CategoryModule],
  controllers: [ProductController],
  providers: [ProductService],
  exports: [ProductService],
})
export class ProductModule {}
