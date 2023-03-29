import { useState } from "react";
import { OrderModal } from "./OrderModal";
import { Board, OrdersContent } from "./styled";

import { type IOrder } from "@/types/Order";

interface IOrdersBoardProps {
  icon: string;
  title: string;
  orders: IOrder[];
}

export const OrdersBoard = ({ icon, orders, title }: IOrdersBoardProps) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<IOrder | null>(null);

  const handleOpenModal = (order: IOrder) => {
    setSelectedOrder(order);
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setSelectedOrder(null);
    setIsModalVisible(false);
  };

  return (
    <Board id={`${title}Board`} >
      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>({orders.length})</span>
      </header>
      {orders.length > 0 && (
        <>
          {orders.map((order) => (
            <OrdersContent key={order.id} onClick={() => handleOpenModal(order)}>
              <button type="button">
                <strong>Mesa {order.table}</strong>
                <span>{order.products.length} Ite{order.products.length !== 1 ? "ns" : "m"}</span>
              </button>
            </OrdersContent>
          ))}
        </>
      )}

      { isModalVisible && <OrderModal onClose={handleCloseModal} order={selectedOrder} />}
    </Board>
  );
};
