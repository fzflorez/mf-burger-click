import { useMemo } from "react"
import { OrderItem } from "../types"
import { formatCurrency } from "../helpers"

type OrderTotalsProps = {
  order: OrderItem[]
  tip: number
  saveOrder: () => void
}

export default function OrderTotals({order, tip, saveOrder} : OrderTotalsProps) {

  const subTotalAmount = useMemo(() => order.reduce((total, item) => total + (item.price * item.quantity), 0), [order])
  const tipAmount = useMemo(() => subTotalAmount * tip, [order, tip])
  const totalAmount = useMemo(() => subTotalAmount + tipAmount, [order, tip])

  return (
    <div className=" space-y-10">
      <div className=" space-y-4 md:space-y-6">
        <h2 className=' text-2xl font-bold text-center md:text-3xl'>Totales y Propina</h2>

        <div className=" bg-slate-200 py-5 px-10">
          <p className=" text-base font-bold flex justify-between md:text-lg">Subtotal: <span className=" font-semibold">{formatCurrency(subTotalAmount)}</span></p>
          <p className=" text-base font-bold flex justify-between md:text-lg">Propina: <span className=" font-semibold">{formatCurrency(tipAmount)}</span></p>
          <p className=" text-base font-bold flex justify-between md:text-lg">Total: <span className=" font-semibold">{formatCurrency(totalAmount)}</span></p>
        </div>
      </div>

      <button 
        className=" w-full bg-orange-400 text-white text-lg font-bold py-2 hover:bg-orange-500 transition-colors duration-300 md:text-xl"
        type="button"
        onClick={saveOrder}
      >Guardar orden
      </button>
    </div>
  )
}
