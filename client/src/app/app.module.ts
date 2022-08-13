// Module Angular
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// Service, Pipe, Guard, Token, Class.
import { AuthGuard } from "./shared/guard/auth.guard";
import { PricePipe } from "./shared/pipe/price.pipe";
import { TokenInterceptor } from "./shared/classes/token.interseptor";

// Lead Component
import { AppComponent } from "./app.component";
// 404 Component
import { NotFoundComponent } from "./not-found/not-found.component";
// Body Site
import { MainComponent } from "./layouts/main/main.component";
// Body Main
import { HomeComponent } from "./layouts/main/home/home.component";
// Body || Header Component
import { HeaderComponent } from "./layouts/main/header/header.component";
// Body || Footer Component
import { FooterComponent } from "./layouts/main/footer/footer.component";
// User Layouts
import { AccountComponent } from "./layouts/user-layouts/account/account.component";
import { LikeComponent } from "./layouts/user-layouts/like/like.component";
import { CartComponent } from "./layouts/user-layouts/cart/cart.component";

// Auth Layouts
import { LoginComponent } from "./layouts/login/login.component";
import { RegisterComponent } from "./layouts/register/register.component";

import { SearchComponent } from "./layouts/search/search.component";
import { ProductComponent } from "./layouts/user-layouts/product/product.component";
import { ProductNewComponent } from "./layouts/user-layouts/product-new/product-new.component";
import { SettingsComponent } from "./layouts/user-layouts/settings/settings.component";
import { UserComponent } from "./layouts/user-layouts/user/user.component";
import { NewslettersComponent } from "./layouts/user-layouts/newsletters/newsletters.component";
// Angular Material UI
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./shared/material/material.module";
import { InfoComponent } from "./layouts/card/info/info.component";
// Card ========================================================================================================================
import { CardComponent } from "./layouts/card/card.component";
// Card >>> Info
import { CardInfoComponent } from "./layouts/card/card-info/card-info.component";
// Card >>> Characteristics
import { CardCharacteristicsComponent } from "./layouts/card/card-characteristics/card-characteristics.component";
// Card >>> Comments
import { CardCommentsComponent } from "./layouts/card/card-comments/card-comments.component";
// Card >>> Questions
import { CardQuestionsComponent } from "./layouts/card/card-questions/card-questions.component";
// Card >>> Photo
import { CardPhotoComponent } from "./layouts/card/card-photo/card-photo.component";
// Card >>> Accessories
import { CardAccessoriesComponent } from "./layouts/card/card-accessories/card-accessories.component";

// Routing Link
const appRoutes: Routes = [
  {
    path: "",
    component: HomeComponent,
    children: [
      { path: "login", component: LoginComponent },
      { path: "register", component: RegisterComponent },
    ],
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
  { path: "like", canActivate: [AuthGuard], component: LikeComponent },
  { path: "cart", canActivate: [AuthGuard], component: CartComponent },
  { path: "search", component: SearchComponent },
  {
    path: "card/:id",
    component: CardComponent,
    children: [
      {
        path: "info",
        component: CardInfoComponent,
      },
      {
        path: "characteristics",
        component: CardCharacteristicsComponent,
      },
      {
        path: "comments",
        component: CardCommentsComponent,
      },
      {
        path: "questions",
        component: CardQuestionsComponent,
      },
      {
        path: "photo",
        component: CardPhotoComponent,
      },
      {
        path: "accessories",
        component: CardAccessoriesComponent,
      },
    ],
  },
  {
    path: "**",
    component: NotFoundComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AccountComponent,
    LikeComponent,
    CartComponent,
    ProductComponent,
    ProductNewComponent,
    UserComponent,
    PricePipe,
    NewslettersComponent,
    CardComponent,
    InfoComponent,
    CardCommentsComponent,
    CardQuestionsComponent,
    CardPhotoComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, multi: true, useClass: TokenInterceptor },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
