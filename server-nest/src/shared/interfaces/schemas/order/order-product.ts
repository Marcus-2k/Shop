export interface OrderProduct {
  info: {
    product_id: string[];
    counter: number[];
    totalPrice: number;
    totalActionPrice: number;
    totalCounterProduct: number;
  };
}
