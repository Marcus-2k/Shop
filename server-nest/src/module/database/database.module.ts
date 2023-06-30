import { Module } from "@nestjs/common";

// Mongo
import { MongooseModule } from "@nestjs/mongoose";

// Schemas
import { UserSchema } from "src/shared/schemas/User.schema";
import { TokenSchema } from "src/shared/schemas/Token.schema";
import { ProductSchema } from "src/shared/schemas/Product.schema";
import { OrderSchema } from "src/shared/schemas/Order.schema";
import { NewsSchema } from "src/shared/schemas/News.schema";

@Module({
  imports: [
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
