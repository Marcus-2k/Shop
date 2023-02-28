import { MatFormFieldAppearance } from "@angular/material/form-field";

export interface InputData {
  photoData: InputData_Photo;
  titleData: InputData_Title;
  priceData: InputData_Price;
  statusData: InputData_Status;
  categoryData: InputData_Category;
  characteristicsData: InputData_Characteristics;
  descriptionData: InputData_Description;
  keywordsData: InputData_Keywords;

  appearance: MatFormFieldAppearance;
}

export interface InputData_Photo {
  maxCounterFile: number;
}
export interface InputData_Title {
  nameProduct: string;
  minLengthName: number;
  maxLengthName: number;
}
export interface InputData_Price {
  price: number;
  action: boolean;
  actionPrice: number;
  actionProcent: number;
  minActionProcent: number;
}
export interface InputData_Status {
  counter: number;
  status: number;
}
export interface InputData_Category {
  categoryListNumber: number[];
}
export interface InputData_Characteristics {
  categoryNumber: number[] | undefined;
  characteristicsNumber: number[][] | undefined;
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
