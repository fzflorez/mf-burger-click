import { ClipboardDocumentListIcon } from "@heroicons/react/24/solid";
import Header from "./components/Header";
import MenuItemList from "./components/MenuItemList";
import OrderContents from "./components/OrderContents";
import OrderTotals from "./components/OrderTotals";
import TipPrecentajeForm from "./components/TipPrecentajeForm";
import { menuItems } from "./data/db";
import useOrder from "./hooks/useOrder";
import { XMarkIcon } from "@heroicons/react/24/solid";

function App() {
  const {
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
  } = useOrder();

  return (
    <>
      <Header />

      <main className="max-w-7xl mx-auto space-y-6 md:space-y-0 grid py-8 md:py-10 relative">
        <div className="px-3 md:px-5 relative">
          <h2 className="text-2xl font-black text-center sm:text-3xl">Menú</h2>

          <div className="mt-6 sm:mt-8 grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
            {menuItems.map((item) => (
              <MenuItemList key={item.id} item={item} addItem={addItem} />
            ))}
          </div>
        </div>

        <button onClick={() => setOpenModalOrder(true)}>
          <div className="w-full min-w-12 max-w-14 p-3 bg-slate-900 rounded-full text-white fixed bottom-5 right-5">
            <ClipboardDocumentListIcon />
          </div>
        </button>

        {openModalOrder && (
          <div className="fixed right-0 top-0 -inset-0inset-0 w-full max-w-lg h-screen bg-white rounded-l-xl p-5">
            <button
              onClick={() => setOpenModalOrder(false)}
              className="w-full flex justify-end"
            >
              <XMarkIcon className="w-8 h-8 p-1 rounded-full hover:bg-gray-200 transition duration-300 ease-in-out" />
            </button>

            <h2 className="text-2xl font-black text-center sm:text-3xl">
              Tu pedido
            </h2>

            <div className="mt-8 space-y-6">
              {order.length ? (
                <>
                  <OrderContents
                    order={order}
                    handleClickIncrease={handleClickIncrease}
                    handleClickDecrease={handleClickDecrease}
                    removeItem={removeItem}
                  />

                  <TipPrecentajeForm setTip={setTip} />

                  <OrderTotals order={order} tip={tip} saveOrder={saveOrder} />
                </>
              ) : (
                <p className="text-lg text-center">La orden está vacía.</p>
              )}
            </div>
          </div>
        )}
      </main>
    </>
  );
}

export default App;
