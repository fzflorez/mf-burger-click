import { formatCurrency } from "../helpers"
import { MenuItem } from "../types"

type MenuItemListProps = {
  item: MenuItem
  addItem: (item: MenuItem) => void
}

export default function MenuItemList({item, addItem} : MenuItemListProps) {
  return (
    <button 
      className=" w-full flex justify-between items-center border-2 border-gray-600 rounded-lg px-3 py-3 hover:bg-gray-300 md:px-4 md:py-2"
      onClick={() => addItem(item)}
    >
      <div className=" text-left">
        <p className=" text-base font-bold leading-none md:text-lg">{item.name}</p>
        <p className=" text-sm md:text-base">{item.description}</p>
      </div>

      <p className=" text-base font-bold md:text-lg">{formatCurrency(item.price)}</p>
    </button>
  )
}
