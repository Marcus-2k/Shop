import { Component, Input, OnInit } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";

import {
  OrderShipping,
  DialogSearchSettlementsClose,
  DialogGetWarehousesClose,
} from "src/app/shared/interface/interfaces";
import { OrderAction_updateShipping } from "src/app/shared/interface/interface-action/order.interfaces";

import { DialogSearchSettlements } from "src/app/template/dialog/dialog-search-settlements/dialog-search-settlements";
import { DialogGetWarehouses } from "src/app/template/dialog/dialog-get-warehouses/dialog-get-warehouses";

import { Store } from "@ngrx/store";
import { OrderActions } from "src/app/store/orders/order.action";
import { OrderSelector } from "src/app/store/orders/order.selector";

@Component({
  selector: "app-cart-order-shipping",
  templateUrl: "./cart-order-shipping.component.html",
  styleUrls: ["./cart-order-shipping.component.scss"],
})
export class CartOrderShippingComponent implements OnInit {
  constructor(public dialog: MatDialog, private store$: Store) {}

  @Input() sequence_number_order?: number;

  ngOnInit(): void {
    if (this.sequence_number_order !== undefined) {
      const storeShipping = this.store$
        .select(OrderSelector.getShipping(this.sequence_number_order))
        .subscribe((stateShipping) => {
          if (stateShipping) {
            this.dataAddresses = stateShipping.info;
            this.selectTypeShipping = stateShipping.selectTypeShipping;
          }
        });

      storeShipping.unsubscribe();
    }
  }

  dataAddresses: OrderShipping = {
    addressesPresent: null,
    addressesMainDescription: null,
    addressesWarehousesDescription: null,
  };

  openDialogSettlements(): void {
    console.log(this.dataAddresses);

    const dialogRef: MatDialogRef<
      DialogSearchSettlements,
      DialogSearchSettlementsClose
    > = this.dialog.open(DialogSearchSettlements, {
      width: "600px",
      data: { addressesPresent: "", addressesMainDescription: "" },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.dataAddresses = Object.assign({}, result, {
          addressesWarehousesDescription: null,
        });
      } else {
        this.dataAddresses = {
          addressesPresent: null,
          addressesMainDescription: null,
          addressesWarehousesDescription: null,
        };
      }

      this.updateShippingInStore();
    });
  }

  selectTypeShipping: 0 | 1 | 2 | null = null;
  typeShipping: string[] = ["Нова пошта", "УкрПошта", "Meest"];

  openDialogWarehouses(): void {
    if (this.dataAddresses) {
      const dialogRef: MatDialogRef<
        DialogGetWarehouses,
        DialogGetWarehousesClose
      > = this.dialog.open(DialogGetWarehouses, {
        width: "800px",
        data: {
          addressesMainDescription: this.dataAddresses.addressesMainDescription,
        },
      });

      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          this.dataAddresses = Object.assign({}, this.dataAddresses, result);
        } else {
          this.dataAddresses = Object.assign({}, this.dataAddresses, {
            addressesWarehousesDescription: null,
          });
        }

        this.updateShippingInStore();
      });
    }
  }

  updateShippingInStore() {
    if (this.sequence_number_order !== undefined) {
      const dataAddresses: OrderAction_updateShipping = {
        info: this.dataAddresses,
        selectTypeShipping: this.selectTypeShipping,
        selectTypeShippingText:
          this.selectTypeShipping !== null
            ? this.typeShipping[this.selectTypeShipping]
            : null,
        sequence_number_order: this.sequence_number_order,
        valid:
          this.dataAddresses.addressesMainDescription &&
          this.dataAddresses.addressesWarehousesDescription
            ? true
            : false,
      };

      this.store$.dispatch(OrderActions.updateShipping(dataAddresses));
    }
  }
}
