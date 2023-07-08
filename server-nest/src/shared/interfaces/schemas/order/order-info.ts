export interface OrderInfo {
  seller: string;
  merchant: string;
  dateOfCreation: Date;
  dateOfDispatch: Date | null;
  orderID: string;
  status: number;
}
