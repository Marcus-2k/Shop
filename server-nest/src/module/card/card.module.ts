import { Module } from "@nestjs/common";
import { CardController } from "./card.controller";
import { DatabaseModule } from "../database/database.module";

@Module({
  imports: [DatabaseModule],
  controllers: [CardController],
})
export class CardModule {}
