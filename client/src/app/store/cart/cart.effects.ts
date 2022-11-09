import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ShoppingCartActions } from "./cart.action";

import { mergeMap, map } from "rxjs";

import { RequestUserService } from "../../shared/service/server/request-user.service";
import { ShoppingCart } from "../../shared/interface/interfaces";

@Injectable()
export class ShoppingCartEffects {
  constructor(
    private actions$: Actions,
    private requestUser: RequestUserService
  ) {}

  getShoppingCart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ShoppingCartActions.getShoppingCart),
      mergeMap(() =>
        this.requestUser.getShoppingCart().pipe(
          map((shoppingCart: ShoppingCart) => {
            return ShoppingCartActions.upShoppingCart(shoppingCart);
          })
        )
      )
    )
  );
  addShoppingCart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ShoppingCartActions.addShoppingCart),
      mergeMap((action) =>
        this.requestUser.addShoppingCart(action.id).pipe(
          map((shoppingCart: ShoppingCart) => {
            return ShoppingCartActions.upShoppingCart(shoppingCart);
          })
        )
      )
    )
  );
  removeShoppingCart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ShoppingCartActions.removeShoppingCart),
      mergeMap((action) =>
        this.requestUser.removeShoppingCart(action.id).pipe(
          map((shoppingCart: ShoppingCart) => {
            return ShoppingCartActions.upShoppingCart(shoppingCart);
          })
        )
      )
    )
  );
}
