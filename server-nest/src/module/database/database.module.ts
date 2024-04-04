import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { NewsSchema } from "../../shared/schemas/News.schema";
import { OrderSchema } from "../../shared/schemas/Order.schema";
import { ProductSchema } from "../../shared/schemas/Product.schema";
import { TokenSchema } from "../../shared/schemas/Token.schema";
import { UserSchema } from "../../shared/schemas/User.schema";

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => {
        return {
          uri: config.get<string>("CONNECTION_STRING_MONGO_DB"),
          dbName: config.get<string>("DB_NAME"),
        };
      },
    }),
    MongooseModule.forFeature([
      { name: "user", schema: UserSchema },
      { name: "token", schema: TokenSchema },
      { name: "product", schema: ProductSchema },
      { name: "order", schema: OrderSchema },
      { name: "news", schema: NewsSchema },
    ]),
  ],
  exports: [
    MongooseModule.forFeature([
      { name: "user", schema: UserSchema },
      { name: "token", schema: TokenSchema },
      { name: "product", schema: ProductSchema },
      { name: "order", schema: OrderSchema },
      { name: "news", schema: NewsSchema },
    ]),
  ],
})
export class DatabaseModule {}
