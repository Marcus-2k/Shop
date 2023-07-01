import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

// Modules
import { AccountUserModule } from "./module/account-user/account-user.module";
import { AuthModule } from "./module/auth/auth.module";
import { CardModule } from "./module/card/card.module";
import { CatalogModule } from "./module/catalog/catalog.module";
import { CategoryModule } from "./module/category/category.module";
import { CheckingModule } from "./module/checking/checking.module";
import { GuestModule } from "./module/guest/guest.module";
import { NewsModule } from "./module/news/news.module";
import { OrderModule } from "./module/order/order.module";
import { ProductModule } from "./module/product/product.module";
import { SearchModule } from "./module/search/search.module";
import { SellerModule } from "./module/seller/seller.module";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: "../.env" }),
    AccountUserModule,
    AuthModule,
    CardModule,
    CatalogModule,
    CategoryModule,
    CheckingModule,
    GuestModule,
    NewsModule,
    OrderModule,
    ProductModule,
    SearchModule,
    SellerModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
