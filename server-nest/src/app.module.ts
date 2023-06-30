import { Module } from "@nestjs/common";

// Module
import { DatabaseModule } from "./module/database/database.module";

// Mongo
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [
    MongooseModule.forRoot("mongodb://127.0.0.1:27017/Marketplace"),
    DatabaseModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
