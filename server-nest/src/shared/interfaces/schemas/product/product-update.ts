import { CategoryName } from "../../category-name";

export interface ProductUpdate {
  imageSrc?: string[];
  name?: string;
  price?: number;
  discountPrice?: number | null;
  counter?: number;
  status?: number;
  category?: string;
  categoryName?: CategoryName;
  characteristics?: number[][];
  characteristicsName?: {
    [key: string]: string[];
  };
  keywords?: string[];
  description?: string;
}
