import { useEffect, useState } from "react";
import { MenuItem, OrderItem } from "../types";

export default function useOrder() {
  const initialOrder = () => {
    const localStorageOrder = localStorage.getItem("order");
    return localStorageOrder ? JSON.parse(localStorageOrder) : [];
  };

  const [order, setOrder] = useState<OrderItem[]>(initialOrder);
  const [tip, setTip] = useState(0);
  const [openModalOrder, setOpenModalOrder] = useState(false);

  useEffect(() => {
    localStorage.setItem("order", JSON.stringify(order));
  }, [order]);

  useEffect(() => {
    if (order.length === 0) {
      setTip(0);
    }
  }, [order]);

  const addItem = (item: MenuItem) => {
    const itemExist = order.find((orderItem) => orderItem.id === item.id);

    if (!itemExist) {
      const newItem = { ...item, quantity: 1 };
      setOrder([...order, newItem]);
    }
  };

  const handleClickIncrease = (item: MenuItem) => {
    const updateOrder = order.map((orderItem) =>
      orderItem.id === item.id
        ? {
            ...orderItem,
            quantity: orderItem.quantity < 15 ? orderItem.quantity + 1 : 15,
          }
        : orderItem
    );
    setOrder(updateOrder);
  };

  const handleClickDecrease = (item: MenuItem) => {
    const updateOrder = order.map((orderItem) =>
      orderItem.id === item.id
        ? {
            ...orderItem,
            quantity: orderItem.quantity > 1 ? orderItem.quantity - 1 : 1,
          }
        : orderItem
    );
    setOrder(updateOrder);
  };

  const removeItem = (id: MenuItem["id"]) => {
    setOrder(order.filter((item) => item.id !== id));
  };

  const saveOrder = () => {
    setOrder([]);
    setTip(0);
  };

  return {
    order,
    tip,
    setTip,
    openModalOrder,
    setOpenModalOrder,
    addItem,
    handleClickIncrease,
    handleClickDecrease,
    removeItem,
    saveOrder,
  };
}
