import { Component, Input, OnInit } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";

import {
  OrderShippingAddresses,
  DialogSearchSettlementsClose,
  DialogGetWarehousesClose,
} from "src/app/shared/interface/interfaces";

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

  dataAddresses: OrderShippingAddresses = {
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
        console.log(this.dataAddresses);
        this.updateShippingInStore();
      });
    }
  }

  updateShippingInStore() {
    console.log("Start updateShippingInStore");

    if (this.sequence_number_order !== undefined) {
      console.log("Start updateShippingInStore");
      const dataAddresses: {
        info: OrderShippingAddresses;
        valid: boolean;
        selectTypeShipping: null | 0 | 1 | 2;
      } & {
        sequence_number_order: number;
      } = {
        info: this.dataAddresses,
        valid:
          this.dataAddresses.addressesMainDescription &&
          this.dataAddresses.addressesWarehousesDescription
            ? true
            : false,
        selectTypeShipping: this.selectTypeShipping,
        sequence_number_order: this.sequence_number_order,
      };

      this.store$.dispatch(OrderActions.updateShipping(dataAddresses));
    }
  }
}
