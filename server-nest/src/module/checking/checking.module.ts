import { Module } from "@nestjs/common";
import { CheckingController } from "./checking.controller";
import { DatabaseModule } from "../database/database.module";

@Module({
  imports: [DatabaseModule],
  controllers: [CheckingController],
})
export class CheckingModule {}
