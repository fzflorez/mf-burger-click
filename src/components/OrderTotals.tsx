import { useMemo } from "react";
import { OrderItem } from "../types";
import OrderSummary from "./OrderSummary";

type OrderTotalsProps = {
  order: OrderItem[];
  tip: number;
  saveOrder: () => void;
};

export default function OrderTotals({
  order,
  tip,
  saveOrder,
}: OrderTotalsProps) {
  const subTotalAmount = useMemo(
    () => order.reduce((total, item) => total + item.price * item.quantity, 0),
    [order]
  );
  const tipAmount = useMemo(() => subTotalAmount * tip, [order, tip]);
  const totalAmount = useMemo(() => subTotalAmount + tipAmount, [order, tip]);

  return (
    <div className="space-y-6 pt-6">
      <div>
        <OrderSummary label="Subtotal" amount={subTotalAmount} />
        <OrderSummary label="Propina" amount={tipAmount} />
        <OrderSummary
          label="Total"
          amount={totalAmount}
          className="font-bold"
          textColor="text-orange-500"
        />
      </div>

      <button
        className="w-full bg-orange-500 text-white font-bold p-3 rounded-lg hover:bg-orange-400 transition duration-300 ease-in-out text-base sm:text-lg"
        type="button"
        onClick={saveOrder}
      >
        Realizar Pedido
      </button>
    </div>
  );
}
