import { Component, Input, OnInit, OnDestroy } from "@angular/core";
import { StepperSelectionEvent } from "@angular/cdk/stepper";

import { OrderValid, OrderStepper } from "src/app/shared/interface/interfaces";

import { Subscription } from "rxjs";

import { Store } from "@ngrx/store";
import { OrderActions } from "src/app/store/orders/order.action";
import { OrderSelector } from "src/app/store/orders/order.selector";

@Component({
  selector: "app-cart-order",
  templateUrl: "./cart-order.component.html",
  styleUrls: ["./cart-order.component.scss"],
})
export class CartOrderComponent implements OnInit, OnDestroy {
  constructor(private store$: Store) {}

  @Input() sequence_number_order?: number;

  ngOnInit(): void {
    console.log("Start ngOnInit Cart-Order");

    if (this.sequence_number_order !== undefined) {
      this.storeStepper = this.store$
        .select(OrderSelector.getStepper(this.sequence_number_order))
        .subscribe((stateStepper) => {
          if (stateStepper) {
            this.stepper = stateStepper;
            if (this.selectedIndex === null) {
              this.selectedIndex = stateStepper.selectedIndex;
            }
          } else {
            this.stepper = undefined;
          }
        });

      this.storeValid = this.store$
        .select(OrderSelector.getValid(this.sequence_number_order))
        .subscribe((stateValid) => {
          if (stateValid) {
            this.valid = stateValid;
          } else {
            this.valid = undefined;
          }
        });
    }
  }
  ngOnDestroy(): void {
    this.storeStepper?.unsubscribe();
    this.storeValid?.unsubscribe();
  }

  storeStepper: Subscription | undefined;
  storeValid: Subscription | undefined;

  stepper: OrderStepper | undefined;
  valid: OrderValid | undefined;

  selectedIndex: number | null = null;

  setIndex(event: StepperSelectionEvent): void {
    if (this.sequence_number_order !== undefined) {
      this.store$.dispatch(
        OrderActions.changeStepIndex({
          selectedIndex: event.selectedIndex,
          sequence_number_order: this.sequence_number_order,
        })
      );
    }
  }

  toOrder(): void {
    if (this.sequence_number_order !== undefined) {
      this.store$.dispatch(
        OrderActions.toOrder({
          sequence_number_order: this.sequence_number_order,
        })
      );
    }
  }
}
