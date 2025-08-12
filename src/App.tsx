import { ClipboardDocumentListIcon } from "@heroicons/react/24/solid";
import Header from "./components/Header";
import MenuItemList from "./components/MenuItemList";
import OrderContents from "./components/OrderContents";
import OrderTotals from "./components/OrderTotals";
import TipPrecentajeForm from "./components/TipPrecentajeForm";
import { menuItems } from "./data/db";
import useOrder from "./hooks/useOrder";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const {
    order,
    tip,
    setTip,
    openModalOrder,
    setOpenModalOrder,
    openModalPlaceOrder,
    setOpenModalPlaceOrder,
    addItem,
    handleClickIncrease,
    handleClickDecrease,
    removeItem,
    saveOrder,
  } = useOrder();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-back",
    });
  }, []);

  return (
    <>
      <Header />

      <main className="max-w-7xl mx-auto grid py-8 md:py-10">
        <div className="px-3 md:px-5">
          <h2 className="text-2xl font-black text-center sm:text-3xl">Menú</h2>

          <div className="mt-6 sm:mt-8 grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
            {menuItems.map((item) => (
              <MenuItemList key={item.id} item={item} addItem={addItem} />
            ))}
          </div>
        </div>

        <div>
          <button onClick={() => setOpenModalOrder(true)}  className="w-12 lg:w-14 p-3 bg-slate-900 rounded-full text-white fixed bottom-6 right-6 ">
            <ClipboardDocumentListIcon />
            {order.length > 0 && (
              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full text-xs sm:text-sm font-semibold flex justify-center items-center bg-orange-500 absolute -top-2 sm:-top-3 right-0">
                {order.reduce((total, item) => total + item.quantity, 0)}
              </div>
            )}             
          </button>

          {openModalOrder && (
            <div  className="fixed inset-0 bg-black/60 flex justify-end">
              <div data-aos="fade-left" className="w-full max-w-md h-screen overflow-y-scroll scrollbar-custom bg-slate-50 shadow-lg sm:rounded-l-xl py-8 px-6">
                <button
                  onClick={() => setOpenModalOrder(false)}
                  className="w-full flex justify-end"
                >
                  <XMarkIcon className="w-8 h-8 p-1 rounded-full hover:bg-gray-200 transition duration-300 ease-in-out" />
                </button>

                <h2 className="text-2xl font-black text-center sm:text-3xl">
                  Tu Pedido
                </h2>

                <div className="mt-6">
                  {order.length ? (
                    <>
                      <OrderContents
                        order={order}
                        handleClickIncrease={handleClickIncrease}
                        handleClickDecrease={handleClickDecrease}
                        removeItem={removeItem}
                      />

                      <TipPrecentajeForm tip={tip} setTip={setTip} />

                      <OrderTotals
                        order={order}
                        tip={tip}
                        saveOrder={saveOrder}
                      />
                    </>
                  ) : (
                    <p className="text-lg text-center">La orden está vacía.</p>
                  )}
                </div>
              </div>
            </div>
          )}

          {openModalPlaceOrder && (
            <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4">
              <div className="bg-white rounded-lg shadow-xl p-6 text-center max-w-md">
                <h2 className="text-2xl font-black sm:text-3xl">
                  ¡Pedido Recibido!
                </h2>
                <p className="text-base sm:text-lg text-gray-500 mb-6">
                  Gracias por tu compra. Tu pedido está en preparación y estará
                  listo en breve.
                </p>
                <button
                  className="w-full bg-orange-500 text-white text-base sm:text-lg font-semibold p-3 rounded-lg hover:bg-orange-400 transition duration-300 ease-in-out"
                  onClick={() => setOpenModalPlaceOrder(false)}
                >
                  Cerrar
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
}

export default App;
