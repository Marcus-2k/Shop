import { Component, Input, OnInit } from "@angular/core";
import {
  UntypedFormGroup,
  UntypedFormControl,
  Validators,
} from "@angular/forms";

import { OrderContacts } from "src/app/shared/interface/interfaces";

import { Subscription } from "rxjs";

import { Store } from "@ngrx/store";
import { OrderActions } from "src/app/store/orders/order.action";
import { OrderSelector } from "src/app/store/orders/order.selector";

@Component({
  selector: "app-cart-order-contacts",
  templateUrl: "./cart-order-contacts.component.html",
  styleUrls: ["./cart-order-contacts.component.scss"],
})
export class CartOrderContactsComponent implements OnInit {
  constructor(private store$: Store) {}

  @Input() sequence_number_order?: number;

  ngOnInit(): void {
    if (this.sequence_number_order !== undefined) {
      const storeContacts: Subscription = this.store$
        .select(OrderSelector.getContacts(this.sequence_number_order))
        .subscribe((stateContacts) => {
          if (stateContacts) {
            this.formContacts = new UntypedFormGroup({
              name: new UntypedFormControl(stateContacts.info.name, [
                Validators.required,
              ]),
              email: new UntypedFormControl(stateContacts.info.email, [
                Validators.required,
                Validators.email,
              ]),
              tel: new UntypedFormControl(stateContacts.info.tel, [
                Validators.required,
                Validators.minLength(13),
                Validators.maxLength(13),
                Validators.pattern("[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}"),
              ]),
            });
          }
        });

      storeContacts.unsubscribe();
    }
  }

  formContacts: UntypedFormGroup | undefined;

  updateContactsInStore() {
    if (this.formContacts && this.sequence_number_order !== undefined) {
      const dataContacts: {
        info: OrderContacts;
        valid: boolean;
        sequence_number_order: number;
      } = {
        info: {
          name: this.formContacts.value["name"],
          email: this.formContacts.value["email"],
          tel: this.formContacts.value["tel"],
        },
        valid: this.formContacts.valid,
        sequence_number_order: this.sequence_number_order,
      };

      this.store$.dispatch(OrderActions.updateContacts(dataContacts));
    }
  }
}
