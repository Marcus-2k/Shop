export interface ProductCharacteristics {
  category: string;
  characteristics: number[][];
  characteristicsName: {
    [key: string]: string[];
  };
}
