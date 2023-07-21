import { Module } from "@nestjs/common";
import { CardController } from "./card.controller";
import { DatabaseModule } from "../database/database.module";
import { CardService } from "./card.service";
import { ProductModule } from "../product/product.module";

@Module({
  imports: [DatabaseModule, ProductModule],
  controllers: [CardController],
  providers: [CardService],
  exports: [CardService],
})
export class CardModule {}
