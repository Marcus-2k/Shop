import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import {
  DialogGetWarehousesOpen,
  GetWarehousesNP,
} from "src/app/shared/interface/interfaces";
import { NovaPoshtaService } from "src/app/shared/service/api/nova-poshta.service";

@Component({
  selector: "dialog-get-warehouses",
  templateUrl: "dialog-get-warehouses.html",
  styleUrls: ["./dialog-get-warehouses.scss"],
})
export class DialogGetWarehouses implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DialogGetWarehouses>,
    @Inject(MAT_DIALOG_DATA) public data: DialogGetWarehousesOpen,
    private NovaPoshta: NovaPoshtaService
  ) {}

  ngOnInit(): void {
    this.NovaPoshta.getWarehousesNovaPoshta(
      this.data.addressesMainDescription,
      "",
      500
    ).subscribe((listWarehouses) => {
      console.log(listWarehouses);
      this.listGetWarehouses = listWarehouses;
    });
  }

  listGetWarehouses: GetWarehousesNP | undefined;

  changeWarehouses(addressesWarehousesDescription: string): void {
    this.dialogRef.close({ addressesWarehousesDescription });
  }

  getNewWarehousesNP(event: KeyboardEvent, value: string) {
    console.log(event);

    if (
      event.code !== "ArrowDown" &&
      event.code !== "ArrowUp" &&
      event.code !== "ShiftLeft" &&
      event.code !== "AltLeft" &&
      value !== ""
    ) {
      this.NovaPoshta.getWarehousesNovaPoshta(
        this.data.addressesMainDescription,
        value
      ).subscribe((listWarehouses) => {
        if (listWarehouses.data.length > 0) {
          this.listGetWarehouses = listWarehouses;
        }

        console.log(listWarehouses);
      });
    }
  }
}
