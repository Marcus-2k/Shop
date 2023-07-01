import { Module } from "@nestjs/common";
import { DatabaseModule } from "../database/database.module";
import { NewsController } from "./news.controller";

@Module({
  imports: [DatabaseModule],
  controllers: [NewsController],
  providers: [],
})
export class NewsModule {}
