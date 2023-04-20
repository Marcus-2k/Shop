import { Injectable } from "@angular/core";

import { Observable } from "rxjs";

import { Router } from "@angular/router";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";

import { MyOrder, Redirect } from "../interface/interfaces";
import { ProductCard_MyOrder } from "../interface/product-card/product-card.interfaces";
import { DialogData_ProductNewCatalog } from "../interface/dialog/dialog.interfaces";

import { LoginComponent } from "src/app/layouts/auth/login/login.component";
import { RegisterComponent } from "src/app/layouts/auth/register/register.component";
import { MyOrderDetailComponent } from "src/app/layouts/user-layouts/my-order/my-order-detail/my-order-detail.component";
import { ProductNewCatalogComponent } from "src/app/template/dialog/product-new-catalog/product-new-catalog.component";

import { RenameTitleService } from "./rename-title.service";
import { OpenSnackBarService } from "./open-snack-bar.service";

@Injectable({
  providedIn: "root",
})
export class OpenDialogService {
  constructor(
    private routre: Router,
    public dialog: MatDialog,
    private renameTitle: RenameTitleService,
    private openSnackBar: OpenSnackBarService
  ) {}

  openLogin: boolean = false;
  openLoginWindow() {
    if (this.openLogin === false) {
      this.openLogin = true;

      const dialogRef: MatDialogRef<LoginComponent, Redirect | undefined> =
        this.dialog.open(LoginComponent, {
          width: "600px",
        });

      dialogRef.afterClosed().subscribe((result) => {
        this.renameTitle.renameTitleSite("Інтернет-магазин");
        this.openLogin = false;

        if (result) {
          if (result.redirectTo === "register") {
            this.openRegisterWindow();
          }
          if (result.error === "user_authorized") {
            this.openSnackBar.open("Ви вже авторизовані в системі.", undefined);
          }

          if (result.success === "authorized") {
            this.openSnackBar.open("Авторизація успішна.", undefined);
            this.routre.navigate(["/account/user"]);
          }
        }
      });
    }
  }

  openRegisterWindow() {
    const dialogRef: MatDialogRef<RegisterComponent, Redirect | undefined> =
      this.dialog.open(RegisterComponent, {
        width: "600px",
      });

    dialogRef.afterClosed().subscribe((result) => {
      this.renameTitle.renameTitleSite("Інтернет-магазин");

      if (result) {
        if (result.redirectTo === "login") {
          this.openLoginWindow();
        }
        if (result.error === "user_registered") {
          this.openSnackBar.open(
            "Щоб створити новий акаунт, потрібно завершити сесію.",
            undefined
          );
        } else if (result.success === "registered") {
          this.openSnackBar.open("Реєстрація успішна.", undefined);
          this.routre.navigate(["/account/user"]);
        }
      }
    });
  }

  openDetailWindow(myOrder: MyOrder, productCard: ProductCard_MyOrder[]) {
    const dialogRef: MatDialogRef<MyOrderDetailComponent, undefined> =
      this.dialog.open(MyOrderDetailComponent, {
        width: "70%",
        data: { myOrder: myOrder, productCard: productCard },
      });
  }

  openProductNewCatlogWindow(): Observable<
    DialogData_ProductNewCatalog | undefined
  > {
    const dialogRef: MatDialogRef<
      ProductNewCatalogComponent,
      DialogData_ProductNewCatalog | undefined
    > = this.dialog.open(ProductNewCatalogComponent, {
      width: "100%",
      height: "60%",
      data: { categoryListNumber: [0], categoryListName: [""] },
    });

    return dialogRef.afterClosed();
  }
}
