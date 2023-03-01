import { MatFormFieldAppearance } from "@angular/material/form-field";

export interface InputData {
  photoData: InputData_Photo;
  titleData: InputData_Title;
  priceData: InputData_Price;
  statusData: InputData_Status;
  categoryData: InputData_Category;
  characteristicsData: InputData_Characteristics;
  keywordsData: InputData_Keywords;
  descriptionData: InputData_Description;

  appearance: MatFormFieldAppearance;
}

export interface InputData_Photo {
  maxCounterFile: number;
}
export interface InputData_Title {
  name: string;
  minLengthName: number;
  maxLengthName: number;
}
export interface InputData_Price {
  price: number | null;
  action: boolean;
  actionPrice: number | null;
  actionProcent: number | null;
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
