import { Module } from "@nestjs/common";
import { SearchController } from "./search.controller";
import { DatabaseModule } from "../database/database.module";
import { SearchService } from "./search.service";
import { CategoryModule } from "../category/category.module";
import { CatalogModule } from "../catalog/catalog.module";

@Module({
  imports: [DatabaseModule, CategoryModule, CatalogModule],
  controllers: [SearchController],
  providers: [SearchService],
  exports: [SearchService],
})
export class SearchModule {}
