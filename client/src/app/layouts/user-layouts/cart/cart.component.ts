import { Component, OnInit, OnDestroy } from "@angular/core";
import {
  Order,
  ProductCard_ShoppingCart,
} from "src/app/shared/interface/interfaces";

import { RenameTitleService } from "src/app/shared/service/rename-title.service";
import { RequestUserService } from "src/app/shared/service/server/request-user.service";
import { RequestGuestService } from "src/app/shared/service/server/request-guest.service";

import { Subscription } from "rxjs";

import { Store } from "@ngrx/store";
import { OrderActions } from "src/app/store/orders/order.action";
import { OrderSelector } from "src/app/store/orders/order.selector";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.scss"],
})
export class CartComponent implements OnInit, OnDestroy {
  constructor(
    private renameTitle: RenameTitleService,
    private requestUser: RequestUserService,
    private requestGuest: RequestGuestService,
    private store$: Store
  ) {}

  ngOnInit() {
    console.log("Start ngOnInit Cart");

    this.store$
      .select(OrderSelector.ordersChecking)
      .subscribe((checkingStatus) => {
        if (checkingStatus) {
          // Store ordersUser not empty
          console.log("Store ordersUser not empty");

          this.storeOrder$ = this.store$
            .select(OrderSelector.getOrdersUser)
            .subscribe((stateOrders) => {
              this.renewalCounterOrders(stateOrders);
            });

          this.loader = false;
        } else {
          // Store ordersUser is empty
          console.log("Store ordersUser is empty");
          const user_id = localStorage.getItem("_id");

          if (user_id) {
            // The user is authorised
            this.requestUser.getShoppingCartList().subscribe({
              next: (data) => {
                this.initCart(data);
              },
              error: (error) => {
                console.log(error);
              },
              complete: () => {
                this.loader = false;
              },
            });
          } else {
            // Guest
            const carts_id = localStorage.getItem("guest-shopping-cart");
            if (carts_id && carts_id !== "") {
              this.requestGuest.getShoppingCartList(carts_id).subscribe({
                next: (data) => {
                  this.initCart(data);
                },
                error: (error) => {
                  console.log(error);
                },
                complete: () => {
                  this.loader = false;
                },
              });
            } else {
              this.emptyCart = true;
            }
          }
        }
      })
      .unsubscribe();

    this.renameTitle.renameTitleSite("Кошик");
  }
  ngOnDestroy(): void {
    this.storeOrder$?.unsubscribe();
  }

  storeOrder$: Subscription | undefined;

  loader: boolean = true;
  emptyCart: boolean = false;

  counterOrder: number[] | undefined;

  initCart(data: ProductCard_ShoppingCart[]) {
    if (data.length === 0) {
      this.emptyCart = true;
    } else {
      const orders: Order[] = [];
      const shoppingCart: ProductCard_ShoppingCart[][] = [];

      const user_id = localStorage.getItem("_id");

      data.forEach((element, idx) => {
        const itemOrder: Order = {
          stepper: {
            selectedIndex: 0,
            completedProduct: true,
            completedContacts: false,
            completedShipping: false,
            completedPayment: false,
          },
          info: {
            seller: element.user,
            merchant: user_id,
          },
          product: {
            info: {
              product_id: [element._id],
              counter: [1],
              totalPrice: element.price,
              totalActionPrice: element.action
                ? element.actionPrice
                : element.price,
              totalCounterProduct: 1,
            },
          },
          contacts: {
            info: {
              name: null,
              email: null,
              tel: null,
            },
          },
          shipping: {
            info: {
              addressesPresent: null,
              addressesMainDescription: null,
              addressesWarehousesDescription: null,
            },
            selectTypeShipping: null,
            selectTypeShippingText: null,
          },
          payment: {
            info: {},
            selectTypePayment: null,
            selectTypePaymentText: null,
          },
          valid: {
            validProduct: true,
            validContacts: false,
            validShipping: false,
            validPayment: false,
          },
        };
        if (idx === 0) {
          orders.push(itemOrder);

          shoppingCart.push([data[idx]]);
        } else {
          for (let index = 0; index < orders.length; index++) {
            if (orders[index].info.seller === itemOrder.info.seller) {
              orders[index].product.info.product_id.push(
                itemOrder.product.info.product_id[0]
              );
              orders[index].product.info.counter.push(
                itemOrder.product.info.counter[0]
              );
              orders[index].product.info.totalPrice +=
                itemOrder.product.info.totalPrice;
              orders[index].product.info.totalCounterProduct +=
                itemOrder.product.info.totalCounterProduct;
              orders[index].product.info.totalActionPrice += element.action
                ? itemOrder.product.info.totalActionPrice
                : itemOrder.product.info.totalPrice;

              shoppingCart[index].push(data[idx]);
              break;
            } else if (index === orders.length - 1) {
              orders.push(itemOrder);

              shoppingCart.push([data[idx]]);
              break;
            }
          }
        }
      });

      this.store$.dispatch(OrderActions.recordOrder({ orders_user: orders }));
      this.store$.dispatch(
        OrderActions.recordProductCard({
          productCard_shoppingCart: shoppingCart,
        })
      );

      this.storeOrder$ = this.store$
        .select(OrderSelector.getOrdersUser)
        .subscribe((stateOrders) => {
          this.renewalCounterOrders(stateOrders);
        });
    }
  }

  renewalCounterOrders(stateOrders: Order[] | null): void {
    if (stateOrders) {
      this.counterOrder = [];

      for (let idx = 0; idx < stateOrders.length; idx++) {
        this.counterOrder.push(idx);
      }
    } else {
      this.counterOrder = undefined;
      this.emptyCart = true;
    }
  }
}
