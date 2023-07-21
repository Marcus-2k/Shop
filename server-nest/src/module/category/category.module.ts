import { Module } from "@nestjs/common";
import { CategoryController } from "./category.controller";
import { DatabaseModule } from "../database/database.module";
import { CategoryService } from "./category.service";

@Module({
  imports: [DatabaseModule],
  controllers: [CategoryController],
  providers: [CategoryService],
  exports: [CategoryService],
})
export class CategoryModule {}
