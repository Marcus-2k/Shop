import { Component, Input, OnInit } from "@angular/core";

import { OrderAction_updatePayment } from "src/app/shared/interface/interface-action/order.interfaces";

import { Store } from "@ngrx/store";
import { OrderActions } from "src/app/store/orders/order.action";
import { OrderSelector } from "src/app/store/orders/order.selector";

@Component({
  selector: "app-cart-order-payment",
  templateUrl: "./cart-order-payment.component.html",
  styleUrls: ["./cart-order-payment.component.scss"],
})
export class CartOrderPaymentComponent implements OnInit {
  constructor(private store$: Store) {}

  @Input() sequence_number_order?: number;

  ngOnInit(): void {
    if (this.sequence_number_order !== undefined) {
      const storePayment = this.store$
        .select(OrderSelector.getPayment(this.sequence_number_order))
        .subscribe((statePayment) => {
          if (statePayment) {
            this.selectTypePayment = statePayment.selectTypePayment;
          }
        });

      storePayment.unsubscribe();
    }
  }

  selectTypePayment: 0 | 1 | 2 | 3 | 4 | 5 | null = null;
  typePayment: string[] = [
    "Оплата під час отримання товару",
    "Оплатити зараз",
    "Кредит та оплата частинами",
    "Безготівковий для фізичних осіб",
    "Безготівковими для юридичних осіб",
    "PrivatPay",
    'Оплатити онлайн соціальною картою "Пакунок малюка"',
  ];

  changePayment(): void {
    if (this.sequence_number_order !== undefined) {
      const dataPayment: OrderAction_updatePayment = {
        selectTypePayment: this.selectTypePayment,
        selectTypePaymentText:
          this.selectTypePayment !== null
            ? this.typePayment[this.selectTypePayment]
            : null,
        sequence_number_order: this.sequence_number_order,
        valid: true,
      };

      this.store$.dispatch(OrderActions.updatePayment(dataPayment));
    }
  }
}
