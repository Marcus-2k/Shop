import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import {
  DialogSearchSettlementsOpen,
  SearchSettlementsNP,
} from "src/app/shared/interface/interfaces";
import { NovaPoshtaService } from "src/app/shared/service/api/nova-poshta.service";

@Component({
  selector: "dialog-search-settlements",
  templateUrl: "dialog-search-settlements.html",
  styleUrls: ["./dialog-search-settlements.scss"],
})
export class DialogSearchSettlements implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DialogSearchSettlements>,
    @Inject(MAT_DIALOG_DATA) public data: DialogSearchSettlementsOpen,
    private NovaPoshta: NovaPoshtaService
  ) {}

  ngOnInit(): void {}

  changeSettlements(
    addressesPresent: string,
    addressesMainDescription: string
  ): void {
    console.log("Dialog closed page");

    this.data = {
      addressesPresent,
      addressesMainDescription,
    };

    this.dialogRef.close(this.data);
  }

  listSearchSettlements: SearchSettlementsNP | undefined;

  getNewSettlementsNP(event: KeyboardEvent, value: string) {
    console.log(event);

    if (
      event.code !== "ArrowDown" &&
      event.code !== "ArrowUp" &&
      event.code !== "ShiftLeft" &&
      event.code !== "AltLeft" &&
      value !== ""
    ) {
      this.NovaPoshta.searchSettlementsNovaPoshta(value).subscribe(
        (listSettlements) => {
          if (listSettlements.data.length > 0) {
            this.listSearchSettlements = listSettlements;
          }

          console.log(listSettlements);
        }
      );
    }
  }
}
