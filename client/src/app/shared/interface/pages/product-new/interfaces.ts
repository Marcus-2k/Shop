import { MatFormFieldAppearance } from "@angular/material/form-field";

export interface InputData {
  descriptionData: InputData_Description;
  appearance: MatFormFieldAppearance;
}

export interface InputData_Description {
  description: string;
  minLengthDescription: number;
  maxLengthDescription: number;
}
