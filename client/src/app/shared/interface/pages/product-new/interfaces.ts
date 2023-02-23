import { MatFormFieldAppearance } from "@angular/material/form-field";

export interface InputData {
  titleData: InputData_Title;
  descriptionData: InputData_Description;

  appearance: MatFormFieldAppearance;
}

export interface InputData_Title {
  nameProduct: string;
  minLengthName: number;
  maxLengthName: number;
}
export interface InputData_Description {
  description: string;
  minLengthDescription: number;
  maxLengthDescription: number;
}
