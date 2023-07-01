import { Module } from "@nestjs/common";
import { GuestController } from "./guest.controller";
import { DatabaseModule } from "../database/database.module";

@Module({
  imports: [DatabaseModule],
  controllers: [GuestController],
})
export class GuestModule {}
