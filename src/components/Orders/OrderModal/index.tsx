import { createPortal } from "react-dom";
import { type IOrder } from "@/types/Order";
import { ModalContent, ModalFooter, OrderDetails, OrderItem, Overlay } from "./styles";

import CloseIcon from "@/assets/images/close-icon.svg";
import { getOrderStatusIcon, getOrderStatusText } from "@/utils/orderStatus";
import { formatCurrency } from "@/utils/formatCurrency";
import { useEffect, useRef } from "react";
import Image from "next/image";

interface IOrderModalProps {
  order: IOrder | null
  onClose: () => void
}

export const OrderModal = ({ order, onClose }: IOrderModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function keyListener(e: KeyboardEvent) {
      const listener = keyListenersMap.get(e.keyCode);
      return listener && listener(e);
    }
    document.addEventListener("keydown", keyListener);

    return () => document.removeEventListener("keydown", keyListener);
  });

  const handleTabKey = (e: KeyboardEvent) => {
    if (modalRef.current === null) return;

    const focusableModalElements = modalRef.current.querySelectorAll(
      "a[href], button, textarea, input[type=\"text\"], input[type=\"radio\"], input[type=\"checkbox\"], select"
    );
    const firstElement = focusableModalElements[0];
    const lastElement =
      focusableModalElements[focusableModalElements.length - 1];

    if (!e.shiftKey && document.activeElement !== firstElement) {
      (firstElement as HTMLElement).focus();
      return e.preventDefault();
    }

    if (e.shiftKey && document.activeElement !== lastElement) {
      (lastElement as HTMLElement).focus();
      e.preventDefault();
    }
  };

  // MELHORAR FOCUS TRAP COM TAB - ULTIMO ELEMENTO SO CHEGA APERTANDO SHIFT + TAB
  const keyListenersMap = new Map([[27, onClose], [9, handleTabKey]]);

  if (!order) {
    return null;
  }

  const total = order.products.reduce((total, { product, quantity }) => {
    return total + (product.price * quantity);
  }, 0);

  return createPortal(
    <Overlay role="dialog" aria-modal="true" onClick={onClose} >
      <ModalContent ref={modalRef} onClick={e => e.stopPropagation()}>
        <header>
          <h1>Mesa {order.table}</h1>
          <button type="button" title="Fechar" onClick={onClose} >
            <Image alt="" src={CloseIcon as string} aria-disabled />
          </button>
        </header>

        <main>
          <div>
            <span>Status do pedido</span>
            <strong>{getOrderStatusText(order.status, true)}</strong>
          </div>

          <OrderDetails>
            <h2>Itens</h2>

            {order.products.map(({ product, quantity }) => (
              <OrderItem key={product.id} id={product.id}>
                <Image alt={product.name} width={48} height={40} src={product.imagePath} />
                <span>{quantity}x</span>
                <div>
                  <strong>{product.name}</strong>
                  <span>{formatCurrency(product.price)}</span>
                </div>
              </OrderItem>
            ))}

            <div className="total" >
              <span>Total</span>
              <strong id="totalPrice" >{formatCurrency(total)}</strong>
            </div>
          </OrderDetails>
        </main>

        <ModalFooter>
          <button type="button" className="secondary">
            Cancelar pedido
          </button>

          <button type="button" className="primary">
            <span>{getOrderStatusIcon("IN_PRODUCTION")}</span>
            <span>Iniciar produção</span>
          </button>
        </ModalFooter>
      </ModalContent>
    </Overlay>,
    document.body
  );
};
