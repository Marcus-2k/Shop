import { Document } from "mongoose";

export interface Product extends Document {
  imageSrc: string[];
  name: string;
  price: number;
  action: boolean;
  actionPrice: number;
  counter: number;
  status: number;
  category: number[];
  categoryName: string[];
  characteristics: number[][];
  characteristicsName: {
    [key: string]: string[];
  };
  keywords: string[];
  description: string;
  comments: [];
  questions: [];
  accessories: [];
  user: string;
}
