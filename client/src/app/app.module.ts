// Module Angular
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// Service, Pipe, Guard, Token, Class, Resolver, Routing
import { PricePipe } from "./shared/pipe/price.pipe";
import { TokenInterceptor } from "./shared/classes/token.interseptor";
import { RoutingModule } from "./shared/routing/routing.module";

// Library
import { SwiperModule } from "swiper/angular";

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

// Auth Layouts
import { LoginComponent } from "./layouts/login/login.component";
import { RegisterComponent } from "./layouts/register/register.component";

import { SearchComponent } from "./layouts/search/search.component";
// User Layouts
import { AccountComponent } from "./layouts/user-layouts/account/account.component";
import { UserComponent } from "./layouts/user-layouts/user/user.component";
import { ProductComponent } from "./layouts/user-layouts/product/product.component";
import { ProductNewComponent } from "./layouts/user-layouts/product-new/product-new.component";
import { SettingsComponent } from "./layouts/user-layouts/settings/settings.component";
import { NewslettersComponent } from "./layouts/user-layouts/newsletters/newsletters.component";
import { LikeComponent } from "./layouts/user-layouts/like/like.component";
import { CartComponent } from "./layouts/user-layouts/cart/cart.component";

// Angular Material UI
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./shared/material/material.module";

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
import { CardSmallSidebarComponent } from './layouts/card/card-small-sidebar/card-small-sidebar.component';
import { CardBigSidebarComponent } from './layouts/card/card-big-sidebar/card-big-sidebar.component';

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
    UserComponent,
    CartComponent,
    ProductComponent,
    ProductNewComponent,
    PricePipe,
    NewslettersComponent,
    SettingsComponent,
    // Card
    CardComponent,
    CardInfoComponent,
    CardCharacteristicsComponent,
    CardCommentsComponent,
    CardQuestionsComponent,
    CardPhotoComponent,
    CardAccessoriesComponent,
    CardSmallSidebarComponent,
    CardBigSidebarComponent,
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    SwiperModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, multi: true, useClass: TokenInterceptor },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
