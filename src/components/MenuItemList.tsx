import { formatCurrency } from "../helpers";
import { MenuItem } from "../types";

type MenuItemListProps = {
  item: MenuItem;
  addItem: (item: MenuItem) => void;
};

export default function MenuItemList({ item, addItem }: MenuItemListProps) {
  return (
    <button
      className="w-full flex flex-col justify-center items-center rounded-xl p-4 bg-white shadow-lg border border-gray-100 hover:scale-[1.03] transition duration-300 ease-in-out space-y-1 sm:p6"
      onClick={() => addItem(item)}
    >
      <div className="space-y-1">
        <p className="text-lg font-semibold sm:text-xl">{item.name}</p>
        <p className="text-sm sm:text-base text-gray-500">{item.description}</p>
      </div>

      <p className="text-lg font-semibold sm:text-xl text-orange-400">
        {formatCurrency(item.price)}
      </p>
    </button>
  );
}
