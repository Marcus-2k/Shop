import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";

import { mergeMap, map, catchError } from "rxjs";

import { RequestOrderService } from "src/app/shared/service/server/request-order.service";
import { MyOrderActions } from "./my-order.action";

@Injectable()
export class MyOrderEffects {
  constructor(
    private actions$: Actions,
    private requestOrder: RequestOrderService
  ) {}

  getMyOrder$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MyOrderActions.getMyOrder),
      mergeMap(() =>
        this.requestOrder.getListOrderUser().pipe(
          map((data) => {
            return MyOrderActions.requestFromServer(data);
          })

          // catchError((error) => {
          //   return MyOrderActions.errorFromServer(error);
          // })
        )
      )
    )
  );
}
