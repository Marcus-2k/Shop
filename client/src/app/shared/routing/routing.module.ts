import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
// Not Found 404
import { NotFoundComponent } from "src/app/not-found/not-found.component";
// Home page
import { HomeComponent } from "src/app/layouts/main/home/home.component";
// Auth
import { LoginComponent } from "src/app/layouts/login/login.component";
import { RegisterComponent } from "src/app/layouts/register/register.component";
import { AuthGuard } from "../guard/auth.guard";

const routes: Routes = [
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
        // resolve: {
        // productCharacteristics: CardCharacteristicsResolver,
        // },
      },
      {
        path: "comments",
        component: CardCommentsComponent,
        // resolve: {
        // productComments: CardCommentsResolver,
        // },
      },
      {
        path: "questions",
        component: CardQuestionsComponent,
        // resolve: {
        // productQuestions: CardQuestionsResolver,
        // },
      },
      {
        path: "photo",
        component: CardPhotoComponent,
        // resolve: {
        // productPhoto: CardPhotoResolver,
        // },
      },
      {
        path: "accessories",
        component: CardAccessoriesComponent,
        // resolve: {
        // productAccessories: CardAccessoriesResolver,
        // },
      },
    ],
  },
  {
    path: "**",
    component: NotFoundComponent,
  },
];
