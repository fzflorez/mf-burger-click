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
        <div key={item.id} className="py-4 px-2 border-t border-gray-300 last-of-type:border-b flex justify-between items-center">
          <div className="space-y-1">
            <p className="text-base font-semibold sm:text-lg">{item.name} - {''}
              <span className="text-gray-500 font-normal">{formatCurrency(item.price * item.quantity)}</span>
            </p>
            <div className=" flex items-center gap-3">
              <button 
                type="button" 
                className="text-base font-semibold sm:text-lg w-7 h-7 bg-gray-200 hover:bg-gray-300 rounded-full flex justify-center items-center transition duration-300 ease-in-out"
                onClick={() => handleClickDecrease(item)}
              >
                <span>-</span>
              </button>
              <p className="text-base font-semibold sm:text-lg">{item.quantity}</p>
              <button 
                type="button" 
                className="text-base font-semibold sm:text-lg w-7 h-7 bg-gray-200 hover:bg-gray-300 rounded-full flex justify-center items-center transition duration-300 ease-in-out"
                onClick={() => handleClickIncrease(item)}
              >
                <span>+</span>
              </button>
            </div>
          </div>

          <button 
            className="w-7 h-7 text-red-300 hover:text-red-400 transition duration-300 ease-in-out"
            onClick={() => removeItem(item.id)}
          >
            <TrashIcon />
          </button>
        </div>
      ))}
    </div>
  )
}
