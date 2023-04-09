import { NgModule } from "@angular/core";

import { RouterModule, Routes } from "@angular/router";

// Not Found 404
import { NotFoundComponent } from "src/app/not-found/not-found.component";
// Home page
import { HomeComponent } from "src/app/layouts/main/home/home.component";
// Guard, Resolver
import { AuthGuard } from "../guard/auth.guard";
import { CardResolver } from "src/app/shared/resolver/card.resolver";
import { CardInfoResolver } from "../resolver/card-info.resolver";
import { CardCharacteristicsResolver } from "../resolver/card-characteristics.resolver";
import { CardCommentsResolver } from "../resolver/card-comments.resolver";
import { CardQuestionsResolver } from "../resolver/card-questions.resolver";
import { CardPhotoResolver } from "../resolver/card-photo.resolver";

// User Pages
import { AccountComponent } from "src/app/layouts/user-layouts/account/account.component";
import { UserComponent } from "src/app/layouts/user-layouts/user/user.component";
import { MyOrderComponent } from "src/app/layouts/user-layouts/my-order/my-order.component";
import { ProductComponent } from "src/app/layouts/user-layouts/product/product.component";
import { ProductNewComponent } from "src/app/layouts/user-layouts/product-new/product-new.component";
import { SettingsComponent } from "src/app/layouts/user-layouts/settings/settings.component";
import { NewslettersComponent } from "src/app/layouts/user-layouts/newsletters/newsletters.component";
import { WishlistComponent } from "src/app/layouts/user-layouts/wishlist/wishlist.component";
import { CartComponent } from "src/app/layouts/user-layouts/cart/cart.component";
import { SearchComponent } from "src/app/layouts/search/search.component";
import { CatalogSectionComponent } from "src/app/layouts/catalog-section/catalog-section.component";

// Card Component
import { CardComponent } from "src/app/layouts/card/card.component";
// Card Component Child === START
import { CardInfoComponent } from "src/app/layouts/card/card-info/card-info.component";
import { CardCharacteristicsComponent } from "src/app/layouts/card/card-characteristics/card-characteristics.component";
import { CardCommentsComponent } from "src/app/layouts/card/card-comments/card-comments.component";
import { CardQuestionsComponent } from "src/app/layouts/card/card-questions/card-questions.component";
import { CardPhotoComponent } from "src/app/layouts/card/card-photo/card-photo.component";
import { CardAccessoriesComponent } from "src/app/layouts/card/card-accessories/card-accessories.component";
// Card Component Child === END

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "account",
    canActivate: [AuthGuard],
    component: AccountComponent,
    children: [
      {
        path: "user",
        canActivate: [AuthGuard],
        component: UserComponent,
      },
      {
        path: "my-order",
        canActivate: [AuthGuard],
        component: MyOrderComponent,
      },
      {
        path: "product",
        canActivate: [AuthGuard],
        component: ProductComponent,
      },
      {
        path: "product/new",
        canActivate: [AuthGuard],
        component: ProductNewComponent,
      },
      {
        path: "product/new/:id",
        canActivate: [AuthGuard],
        component: ProductNewComponent,
      },
      {
        path: "settings",
        canActivate: [AuthGuard],
        component: SettingsComponent,
      },
      {
        path: "newsletters",
        canActivate: [AuthGuard],
        component: NewslettersComponent,
      },
    ],
  },
  { path: "wishlist", canActivate: [AuthGuard], component: WishlistComponent },
  { path: "cart", canActivate: [AuthGuard], component: CartComponent },
  { path: "search", component: SearchComponent },
  { path: "search/:navigate_link", component: SearchComponent },
  {
    path: "card/:id",
    component: CardComponent,
    resolve: {
      product: CardResolver,
    },
    children: [
      {
        path: "info",
        component: CardInfoComponent,
        resolve: {
          productInfo: CardInfoResolver,
        },
      },
      {
        path: "characteristics",
        component: CardCharacteristicsComponent,
        resolve: {
          productCharacteristics: CardCharacteristicsResolver,
        },
      },
      {
        path: "comments",
        component: CardCommentsComponent,
        resolve: {
          productComments: CardCommentsResolver,
        },
      },
      {
        path: "questions",
        component: CardQuestionsComponent,
        resolve: {
          productQuestions: CardQuestionsResolver,
        },
      },
      {
        path: "photo",
        component: CardPhotoComponent,
        resolve: {
          productPhoto: CardPhotoResolver,
        },
      },
      {
        path: "accessories",
        component: CardAccessoriesComponent,
      },
    ],
  },
  { path: "computers-notebooks", component: CatalogSectionComponent },
  { path: "telefony-tv-i-ehlektronika", component: CatalogSectionComponent },
  { path: "game-zone", component: CatalogSectionComponent },
  { path: "household-appliances", component: CatalogSectionComponent },
  { path: "household-goods", component: CatalogSectionComponent },
  { path: "tools-and-automotive-products", component: CatalogSectionComponent },
  { path: "plumbing-and-repair", component: CatalogSectionComponent },
  {
    path: "cottage-garden-and-vegetable-garden",
    component: CatalogSectionComponent,
  },
  { path: "sports-and-hobbies", component: CatalogSectionComponent },
  { path: "clothes-shoes-and-jewelry", component: CatalogSectionComponent },
  { path: "beauty-and-health", component: CatalogSectionComponent },
  { path: "childrens-products", component: CatalogSectionComponent },
  {
    path: "**",
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}
