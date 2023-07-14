export interface ProductUpdate {
  imageSrc?: string[];
  name?: string;
  price?: number;
  action?: boolean;
  actionPrice?: number;
  counter?: number;
  status?: number;
  category?: [number, number] | [number, number, number];
  categoryName?: [string, string] | [string, string, string];
  characteristics?: number[][];
  characteristicsName?: {
    [key: string]: string[];
  };
  keywords?: string[];
  description?: string;
}
