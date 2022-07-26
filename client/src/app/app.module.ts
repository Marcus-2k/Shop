// Module Angular
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// Service, Pipe, Guard, Token, Class, Resolver, Routing
import { PricePipe } from "./shared/pipe/price.pipe";
import { FindByTextPipe } from "./shared/pipe/findByText.pipe";
import { TokenInterceptor } from "./shared/classes/token.interseptor";
import { RoutingModule } from "./shared/routing/routing.module";

// Scripts
import { CustomPaginator } from "./shared/scripts/CustomPaginatorConfiguration";

// For providers
import { MatPaginatorIntl } from "@angular/material/paginator";

// Library
import { SliderSwiperModule } from "./shared/slider/slider.module";

// Lead Component
import { AppComponent } from "./app.component";
// 404 Component
import { NotFoundComponent } from "./not-found/not-found.component";
// Body Main
import { HomeComponent } from "./layouts/main/home/home.component";
// Body >>> Header Component
import { HeaderComponent } from "./layouts/main/header/header.component";
// Body >>> Footer Component
import { FooterComponent } from "./layouts/main/footer/footer.component";

// Auth Layouts
import { LoginComponent } from "./layouts/login/login.component";
import { RegisterComponent } from "./layouts/register/register.component";

// Page Search Product
import { SearchComponent } from "./layouts/search/search.component";
// User Layouts
import { AccountComponent } from "./layouts/user-layouts/account/account.component";
import { UserComponent } from "./layouts/user-layouts/user/user.component";
import { ProductComponent } from "./layouts/user-layouts/product/product.component";
import { ProductNewComponent } from "./layouts/user-layouts/product-new/product-new.component";
import { SettingsComponent } from "./layouts/user-layouts/settings/settings.component";
import { NewslettersComponent } from "./layouts/user-layouts/newsletters/newsletters.component";
import { WishlistComponent } from "./layouts/user-layouts/wishlist/wishlist.component";
import { CartComponent } from "./layouts/user-layouts/cart/cart.component";
// The internal components of the maps component
import { CartEmptyComponent } from "./layouts/user-layouts/cart/cart-empty/cart-empty.component";
import { CartOrderComponent } from "./layouts/user-layouts/cart/cart-order/cart-order.component";
import { CartAsideComponent } from "./layouts/user-layouts/cart/cart-aside/cart-aside.component";
import { CartOrderProductComponent } from "./layouts/user-layouts/cart/cart-order/cart-order-product/cart-order-product.component";
import { CartOrderContactsComponent } from "./layouts/user-layouts/cart/cart-order/cart-order-contacts/cart-order-contacts.component";
import { CartOrderShippingComponent } from "./layouts/user-layouts/cart/cart-order/cart-order-shipping/cart-order-shipping.component";
import { CartOrderPaymentComponent } from "./layouts/user-layouts/cart/cart-order/cart-order-payment/cart-order-payment.component";

// Angular Material UI
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./shared/material/material.module";

// Card
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
// Card >>> Sidebar Big or Small
import { CardSmallSidebarComponent } from "./layouts/card/card-small-sidebar/card-small-sidebar.component";
import { CardBigSidebarComponent } from "./layouts/card/card-big-sidebar/card-big-sidebar.component";
// Card >>> components
import { CardSidebarAboutComponent } from "./layouts/card/components/card-sidebar-about/card-sidebar-about.component";
import { CardSidebarStatusesComponent } from "./layouts/card/components/card-sidebar-statuses/card-sidebar-statuses.component";
import { CardSidebarSellerComponent } from "./layouts/card/components/card-sidebar-seller/card-sidebar-seller.component";
import { CardFavoriteComponent } from "./layouts/card/components/card-favorite/card-favorite.component";
import { CardDescriptionComponent } from "./layouts/card/components/card-description/card-description.component";
import { CardKeyWordsComponent } from "./layouts/card/components/card-key-words/card-key-words.component";
import { CardShoppingCartComponent } from "./layouts/card/components/card-shopping-cart/card-shopping-cart.component";
// Catalog
import { CatalogComponent } from "./template/catalog/catalog.component";
// Other
import { ProductCardWishComponent } from "./template/product-card-wish/product-card-wish.component";
import { ProductCardShoppingCartComponent } from "./template/product-card-shopping-cart/product-card-shopping-cart.component";
import { ProductCardElementStatusesComponent } from "./template/components/product-card-element-statuses/product-card-element-statuses.component";
import { ProductCardElementPriceComponent } from "./template/components/product-card-element-price/product-card-element-price.component";
import { ProductCardComponent } from "./template/product-card/product-card.component";
import { ProductCardUserComponent } from "./template/product-card-user/product-card-user.component";
import { HistoryViewComponent } from "./template/history-view/history-view.component";
import { environment } from "../environments/environment";
// Pop-up windows (Dialog) START ============================================================================================================
import { DialogSearchSettlements } from "./template/dialog/dialog-search-settlements/dialog-search-settlements";
import { DialogGetWarehouses } from "./template/dialog/dialog-get-warehouses/dialog-get-warehouses";
// Pop-up windows (Dialog) END ==============================================================================================================
// NgRx START ===============================================================================================================================
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { StoreRouterConnectingModule } from "@ngrx/router-store";
import { EffectsModule } from "@ngrx/effects";
import { reducers, metaReducers } from "./store";
import { FavoriteEffects } from "./store/favorite/favorite.effects";
import { ShoppingCartEffects } from "./store/cart/cart.effects";
import { OrderEffects } from "./store/orders/order.effects";
// NgRx END =================================================================================================================================

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AccountComponent,
    WishlistComponent,
    UserComponent,
    CartComponent,
    CartEmptyComponent,
    CartOrderComponent,
    CartAsideComponent,
    CartOrderProductComponent,
    CartOrderContactsComponent,
    CartOrderShippingComponent,
    CartOrderPaymentComponent,
    ProductComponent,
    ProductNewComponent,
    PricePipe,
    FindByTextPipe,
    NewslettersComponent,
    SettingsComponent,
    CardComponent,
    CardInfoComponent,
    CardCharacteristicsComponent,
    CardCommentsComponent,
    CardQuestionsComponent,
    CardPhotoComponent,
    CardAccessoriesComponent,
    CardSmallSidebarComponent,
    CardBigSidebarComponent,
    CardSidebarAboutComponent,
    CardSidebarStatusesComponent,
    CardSidebarSellerComponent,
    CardFavoriteComponent,
    CardDescriptionComponent,
    CardKeyWordsComponent,
    CardShoppingCartComponent,
    ProductCardWishComponent,
    ProductCardShoppingCartComponent,
    ProductCardElementStatusesComponent,
    ProductCardElementPriceComponent,
    ProductCardComponent,
    ProductCardUserComponent,
    CatalogComponent,
    HistoryViewComponent,
    DialogSearchSettlements,
    DialogGetWarehouses,
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    SliderSwiperModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
    }),
    StoreRouterConnectingModule.forRoot(),
    EffectsModule.forRoot([FavoriteEffects, ShoppingCartEffects, OrderEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, multi: true, useClass: TokenInterceptor },
    { provide: MatPaginatorIntl, useValue: CustomPaginator() },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
