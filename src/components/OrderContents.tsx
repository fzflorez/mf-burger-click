import { TrashIcon } from "@heroicons/react/20/solid"
import { formatCurrency } from "../helpers"
import { MenuItem, OrderItem } from "../types"

type OrderContentsProps = {
  order: OrderItem[]
  handleClickIncrease: (item: MenuItem) => void
  handleClickDecrease: (item: MenuItem) => void
  removeItem: (id: MenuItem["id"]) => void
}

export default function OrderContents({order, handleClickIncrease, handleClickDecrease, removeItem} : OrderContentsProps) {
  return (
    <div>
      {order.map( item => (
        <div key={item.id} className=" py-4 px-2 border-t-2 border-gray-600 last-of-type:border-b-2 flex justify-between items-center">
          <div className=" space-y-1">
            <p className=" text-base font-bold md:text-lg">{item.name} - <span>{formatCurrency(item.price * item.quantity)}</span></p>
            <div className=" flex items-center gap-3">
              <button 
                type="button" 
                className=" w-6 h-6 rounded-full bg-gray-300 text-gray-800 text-lg font-bold md:w-7 md:h-7 md:text-xl"
                onClick={() => handleClickDecrease(item)}
              >
                <span className=" relative -top-0.5">-</span>
              </button>
              <p className=" text-base font-bold md:text-lg">{item.quantity}</p>
              <button 
                type="button" 
                className=" w-6 h-6 rounded-full bg-orange-400 text-white text-lg font-bold md:w-6 md:h-6 md:xl"
                onClick={() => handleClickIncrease(item)}
              >
                <span className=" relative -top-0.5">+</span>
              </button>
            </div>
          </div>

          <button 
            className=" w-8 h-8 rounded-full text-lg font-black"
            onClick={() => removeItem(item.id)}
          >
            <TrashIcon className=" w-6 aspect-square text-red-400 md:w-7 hover:text-red-500 transition-colors duration-300"/>
          </button>
        </div>
      ))}
    </div>
  )
}
