import { Component, Input, OnInit, OnDestroy } from "@angular/core";

import { DataAside, OrderValid } from "src/app/shared/interface/interfaces";

import { Subscription } from "rxjs";

import { Store } from "@ngrx/store";
import { OrderActions } from "src/app/store/orders/order.action";
import { OrderSelector } from "src/app/store/orders/order.selector";

@Component({
  selector: "app-cart-aside",
  templateUrl: "./cart-aside.component.html",
  styleUrls: ["./cart-aside.component.scss"],
})
export class CartAsideComponent implements OnInit, OnDestroy {
  constructor(private store$: Store) {}

  @Input() sequence_number_order?: number;

  ngOnInit(): void {
    if (this.sequence_number_order !== undefined) {
      this.storeAside$ = this.store$
        .select(OrderSelector.getAside(this.sequence_number_order))
        .subscribe((stateDataAside) => {
          if (stateDataAside) {
            this.dataAside = stateDataAside;
          }
        });

      this.storeValid$ = this.store$
        .select(OrderSelector.getValid(this.sequence_number_order))
        .subscribe((stateValid) => {
          if (stateValid) {
            this.valid = stateValid;
          }
        });
    }
  }
  ngOnDestroy(): void {
    this.storeAside$?.unsubscribe();
    this.storeValid$?.unsubscribe();
  }

  storeAside$: Subscription | undefined;
  storeValid$: Subscription | undefined;

  dataAside: DataAside | undefined;
  valid: OrderValid | undefined;

  lastNumberCounter(counter: number): 1 | 2 | 5 {
    const stringCounter = counter.toString();
    const lastChar = stringCounter.charAt(stringCounter.length - 1);

    if (lastChar == "1" && !(counter == 11)) {
      return 1;
    } else if (lastChar == "2" && !(counter == 12)) {
      return 2;
    } else if (lastChar == "3" && !(counter == 13)) {
      return 2;
    } else if (lastChar == "4" && !(counter == 14)) {
      return 2;
    } else {
      return 5;
    }
  }

  toOrder() {
    if (this.sequence_number_order !== undefined) {
      this.store$.dispatch(
        OrderActions.toOrder({
          sequence_number_order: this.sequence_number_order,
        })
      );
    }
  }
}
