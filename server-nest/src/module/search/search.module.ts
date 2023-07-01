import { Module } from "@nestjs/common";
import { SearchController } from "./search.controller";
import { DatabaseModule } from "../database/database.module";

@Module({
  imports: [DatabaseModule],
  controllers: [SearchController],
})
export class SearchModule {}
