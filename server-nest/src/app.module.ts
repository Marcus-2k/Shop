import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

// Server Modules
import { DatabaseModule } from "./module/database/database.module";

// Mongo
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: "../.env" }),
    MongooseModule.forRoot("mongodb://127.0.0.1:27017/Marketplace"),
    DatabaseModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
