import { MatFormFieldAppearance } from "@angular/material/form-field";
import { CHARACTERISTICS } from "../../interfaces";

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
  photo_preview: string[] | null;
  maxCounterFile: number;
}
export interface InputData_Title {
  name: string | null;
  minLengthName: number;
  maxLengthName: number;
}
export interface InputData_Price {
  price: number | null;
  maxPrice: number;
  action: boolean;
  actionPrice: number | null;
  actionProcent: number | null;
  minActionProcent: number;
}
export interface InputData_Status {
  counter: number | null;
  status: 0 | 1 | 2 | 3 | null;
}
export interface InputData_Category {
  category: string | null;
  categoryName: string[] | null;
  categorySelected: boolean;
  categoryError: boolean | null;
}
export interface InputData_Characteristics {
  characteristicsNumber: number[][] | null;
  characteristicsName: CHARACTERISTICS[] | null;
}
export interface InputData_Keywords {
  keywords: string;
  minLengthKeywords: number | undefined;
  maxLengthKeywords: number;

  minLengthWord: number;
  maxLengthWord: number;
}
export interface InputData_Description {
  description: string | null;
  minLengthDescription: number;
  maxLengthDescription: number;
}
