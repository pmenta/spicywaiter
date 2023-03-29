import { type IOrder } from "@/types/Order";

export function getOrderStatusIcon(status: IOrder["status"]) {
  switch (status) {
  case "WAITING":
    return "🕒";
  case "IN_PRODUCTION":
    return "👨‍🍳";
  case "DONE":
    return "✅";
  case "CANCELLED":
    return "❌";
  }
}

export function getOrderStatusText(status: IOrder["status"], withIcon = false) {
  switch (status) {
  case "WAITING":
    return `${withIcon && getOrderStatusIcon(status) + " " || ""}Fila de espera`;
  case "IN_PRODUCTION":
    return `${withIcon && getOrderStatusIcon(status) + " " || ""}Em produção`;
  case "DONE":
    return `${withIcon && getOrderStatusIcon(status) + " " || ""}Pronto`;
  case "CANCELLED":
    return `${withIcon && getOrderStatusIcon(status) + " " || ""}Cancelado`;
  }
}
