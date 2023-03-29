import { OrdersBoard } from "./OrdersBoard";
import { OrdersContainer } from "./styled";

import { type IOrder } from "@/types/Order";

const order = {
  id: "63d00c935a84494dcddb1233",
  table: "3",
  status: "WAITING",
  products: [
    {
      product: {
        id: "63cf57ac0cbecadf803f575a",
        name: "Coca-Cola",
        description: "Coca cola trincano de gelada",
        imagePath: "https://spicywaiter.s3.sa-east-1.amazonaws.com/1674532780467-1674532780467-coca-cola.png",
        price: 8,
        ingredients: [],
      },
      quantity: 1,
    },
  ],
  createdAt: "2023-01-24T16:51:31.232Z",
} as IOrder;

const otherOrder = {
  id: "123",
  table: "3",
  status: "IN_PRODUCTION",
  products: [
    {
      product: {
        id: "63cf57ac0cbecadf803f575a",
        name: "whasap 2",
        description: "nunca antes visto",
        imagePath: "https://spicywaiter.s3.sa-east-1.amazonaws.com/1674532780467-1674532780467-coca-cola.png",
        price: 8,
        ingredients: [],
      },
      quantity: 1,
    },
  ],
  createdAt: "2023-01-24T16:51:31.232Z",
} as IOrder

export const Orders = () => {

  return (
    <OrdersContainer>
      <OrdersBoard icon="🕒" title="Fila de espera" orders={[order]}/>
      <OrdersBoard icon="👨‍🍳" title="Em produção" orders={[otherOrder]}/>
      <OrdersBoard icon="✅" title="Pronto" orders={[]}/>
    </OrdersContainer>
  );
};
