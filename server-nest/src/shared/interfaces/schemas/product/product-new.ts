export interface ProductNew {
  imageSrc: string[];
  name: string;
  price: number;
  actionPrice: number | null;
  counter: number;
  status: number;
  category: string;
  categoryName: [string, string] | [string, string, string];
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
