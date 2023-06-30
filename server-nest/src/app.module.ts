import { Module } from "@nestjs/common";

// Mongo
import { MongooseModule } from "@nestjs/mongoose";

// Controllers
import { AppController } from "./app.controller";

// Services
import { AppService } from "./app.service";

@Module({
  imports: [MongooseModule.forRoot("mongodb://127.0.0.1:27017/Marketplace")],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
