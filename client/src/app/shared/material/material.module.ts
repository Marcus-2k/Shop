import { NgModule } from "@angular/core";

// import {  } from "@angular/material";
import { MatSelectModule } from "@angular/material/select";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatGridListModule } from "@angular/material/grid-list";
// import {  } from "@angular/material";

const Material = [
  MatSelectModule,
  MatToolbarModule,
  MatButtonModule,
  MatProgressSpinnerModule,
  MatGridListModule,
];

@NgModule({
  imports: [Material],
  exports: [Material],
})
export class MaterialModule {}
