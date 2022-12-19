import { Injectable } from "@angular/core";

import { mergeMap, map, catchError } from "rxjs";

import { Order } from "src/app/shared/interface/interfaces";

import { Store } from "@ngrx/store";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { OrderActions } from "../orders/order.action";
import { OrderSelector } from "./order.selector";

import { ShoppingCartActions } from "../cart/cart.action";

import { RequestUserService } from "src/app/shared/service/server/request-user.service";
import { RequestOrderService } from "src/app/shared/service/server/request-order.service";

@Injectable()
export class OrderEffects {
  constructor(
    private actions$: Actions,
    private requestUser: RequestUserService,
    private requestOrder: RequestOrderService,
    private store$: Store
  ) {}

  requestToOrder$ = createEffect(() =>
    this.actions$.pipe(
      ofType(OrderActions.toOrder),
      mergeMap((actionData) => {
        let orderState: Order | null = null;

        this.store$
          .select(
            OrderSelector.getOrdersUserByIndex(actionData.sequence_number_order)
          )
          .subscribe((selectorOrderState) => {
            orderState = selectorOrderState;
          });

        return this.requestOrder.createOrder(orderState).pipe(
          map((data) => {
            return OrderActions.toOrderFromServer(data);
          })
        );
        if (orderState) {
          // return this.requestOrder.createOrder(orderState).pipe(
          //   map((data) => {
          //     return OrderActions.toOrderFromServer(data);
          //   })
          // );
        } else {
          // return;
        }
      })
    )
  );
  requestRemoveProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(OrderActions.removeProduct),
      mergeMap((actionData) => {
        return this.requestUser.removeShoppingCart(actionData.product_id).pipe(
          map((data) => {
            this.store$.dispatch(ShoppingCartActions.upShoppingCart(data));

            return OrderActions.removeProductAfterEffects(actionData);
          })
          // catchError((data) => {
          //   return OrderActions.removeProductAfterEffectsError({
          //     error: data,
          //   });
          // })
        );
      })
    )
  );
}
