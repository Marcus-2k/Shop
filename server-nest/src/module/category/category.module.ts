import { Module } from "@nestjs/common";
import { CategoryController } from "./category.controller";
import { DatabaseModule } from "../database/database.module";

@Module({
  imports: [DatabaseModule],
  controllers: [CategoryController],
})
export class CategoryModule {}
