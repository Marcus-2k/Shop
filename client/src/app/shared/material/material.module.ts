import { NgModule } from "@angular/core";

import { MatSelectModule } from "@angular/material/select";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatCardModule } from "@angular/material/card";
import { LayoutModule } from "@angular/cdk/layout";
import { MatInputModule } from "@angular/material/input";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatTableModule } from "@angular/material/table";
import { MatNativeDateModule } from "@angular/material/core";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatBadgeModule } from "@angular/material/badge";

const Material = [
  MatSelectModule,
  MatToolbarModule,
  MatButtonModule,
  MatProgressSpinnerModule,
  MatGridListModule,
  MatCardModule,
  LayoutModule,
  MatInputModule,
  MatTooltipModule,
  MatDatepickerModule,
  MatTableModule,
  MatNativeDateModule,
  MatCheckboxModule,
  MatBadgeModule,
];

@NgModule({
  imports: [Material],
  exports: [Material],
})
export class MaterialModule {}
