import { type IProduct } from "./Product";

export type OrderStatus = "WAITING" | "IN_PRODUCTION" | "DONE" | "CANCELLED";

export interface IOrder {
  id: string;
  table: string;
  status: OrderStatus;
  products: {
    product: IProduct;
    quantity: number;
  }[];
}
