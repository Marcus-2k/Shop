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
// 500 Component
import { NotConnectionComponent } from "./not-connection/not-connection.component";
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
import { SearchEmptyComponent } from "./layouts/search/search-empty/search-empty.component";
import { WidgetAutoPortalComponent } from "./layouts/search/widget-auto-portal/widget-auto-portal.component";
import { WidgetSectionIdComponent } from "./layouts/search/widget-section-id/widget-section-id.component";

// User Layouts
import { AccountComponent } from "./layouts/user-layouts/account/account.component";
import { UserComponent } from "./layouts/user-layouts/user/user.component";
import { MyOrderComponent } from "./layouts/user-layouts/my-order/my-order.component";
import { ProductComponent } from "./layouts/user-layouts/product/product.component";
import { ProductNewComponent } from "./layouts/user-layouts/product-new/product-new.component";
// ProductNew >>> components START
import { ProductNewPhotoComponent } from "./layouts/user-layouts/product-new/product-new-photo/product-new-photo.component";
import { ProductNewTitleComponent } from "./layouts/user-layouts/product-new/product-new-title/product-new-title.component";
import { ProductNewPriceComponent } from "./layouts/user-layouts/product-new/product-new-price/product-new-price.component";
import { ProductNewStatusComponent } from "./layouts/user-layouts/product-new/product-new-status/product-new-status.component";
import { ProductNewCategoryComponent } from "./layouts/user-layouts/product-new/product-new-category/product-new-category.component";
import { ProductNewCharacteristicsComponent } from "./layouts/user-layouts/product-new/product-new-characteristics/product-new-characteristics.component";
import { ProductNewKeywordsComponent } from "./layouts/user-layouts/product-new/product-new-keywords/product-new-keywords.component";
import { ProductNewDescriptionComponent } from "./layouts/user-layouts/product-new/product-new-description/product-new-description.component";
// ProductNew >>> components END
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
import { ProductCardMyOrderComponent } from "./template/product-card-my-order/product-card-my-order.component";
import { ProductCardElementStatusesComponent } from "./template/components/product-card-element-statuses/product-card-element-statuses.component";
import { ProductCardElementPriceComponent } from "./template/components/product-card-element-price/product-card-element-price.component";
import { ProductCardComponent } from "./template/product-card/product-card.component";
import { ProductCardUserComponent } from "./template/product-card-user/product-card-user.component";
import { HistoryViewComponent } from "./template/history-view/history-view.component";
import { OrderStatusComponent } from "./template/components/order-status/order-status.component";
import { MyOrderItemComponent } from "./layouts/user-layouts/my-order/my-order-item/my-order-item.component";
import { MyOrderEmptyComponent } from "./layouts/user-layouts/my-order/my-order-empty/my-order-empty.component";
import { MyOrderHeaderComponent } from "./layouts/user-layouts/my-order/my-order-header/my-order-header.component";
import { MyOrderDetailComponent } from "./layouts/user-layouts/my-order/my-order-detail/my-order-detail.component";
// Pop-up windows (Dialog) START ============================================================================================================
import { DialogSearchSettlements } from "./template/dialog/dialog-search-settlements/dialog-search-settlements";
import { DialogGetWarehouses } from "./template/dialog/dialog-get-warehouses/dialog-get-warehouses";
import { ProductNewCatalogComponent } from "./template/dialog/product-new-catalog/product-new-catalog.component";
// Pop-up windows (Dialog) END ==============================================================================================================
// NgRx START ===============================================================================================================================
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { StoreRouterConnectingModule } from "@ngrx/router-store";
import { reducers, metaReducers } from "./store";
import { EffectsModule } from "@ngrx/effects";
import { FavoriteEffects } from "./store/favorite/favorite.effects";
import { ShoppingCartEffects } from "./store/cart/cart.effects";
import { OrderEffects } from "./store/orders/order.effects";
import { MyOrderEffects } from "./store/my-orders/my-order.effects";
import { ProductNewEffects } from "./store/product-new/product-new.effects";
// NgRx END =================================================================================================================================
import { environment } from "../environments/environment";

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
    ProductNewPhotoComponent,
    ProductNewTitleComponent,
    ProductNewPriceComponent,
    ProductNewStatusComponent,
    ProductNewCategoryComponent,
    ProductNewCharacteristicsComponent,
    ProductNewKeywordsComponent,
    ProductNewDescriptionComponent,
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
    ProductNewCatalogComponent,
    MyOrderComponent,
    ProductCardMyOrderComponent,
    OrderStatusComponent,
    MyOrderItemComponent,
    MyOrderEmptyComponent,
    MyOrderHeaderComponent,
    MyOrderDetailComponent,
    NotConnectionComponent,
    SearchEmptyComponent,
    WidgetAutoPortalComponent,
    WidgetSectionIdComponent,
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
    EffectsModule.forRoot([
      FavoriteEffects,
      ShoppingCartEffects,
      OrderEffects,
      MyOrderEffects,
      ProductNewEffects,
    ]),
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
