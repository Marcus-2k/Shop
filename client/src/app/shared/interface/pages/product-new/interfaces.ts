import { MatFormFieldAppearance } from "@angular/material/form-field";

export interface InputData {
  titleData: InputData_Title;
  descriptionData: InputData_Description;
  keywordsData: InputData_Keywords;

  appearance: MatFormFieldAppearance;
}

export interface InputData_Title {
  nameProduct: string;
  minLengthName: number;
  maxLengthName: number;
}
export interface InputData_Keywords {
  keywords: string;
  minLengthKeywords: number | undefined;
  maxLengthKeywords: number;

  minLengthWord: number;
  maxLengthWord: number;
}
export interface InputData_Description {
  description: string;
  minLengthDescription: number;
  maxLengthDescription: number;
}
