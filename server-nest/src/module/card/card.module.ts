import { Module } from "@nestjs/common";
import { CardController } from "./card.controller";
import { DatabaseModule } from "../database/database.module";
import { CardService } from "./card.service";
import { ProductModule } from "../product/product.module";
import { CategoryModule } from "../category/category.module";

@Module({
  imports: [DatabaseModule, ProductModule, CategoryModule],
  controllers: [CardController],
  providers: [CardService],
  exports: [CardService],
})
export class CardModule {}
