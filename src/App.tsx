import Header from "./components/Header"
import MenuItemList from "./components/MenuItemList"
import OrderContents from "./components/OrderContents"
import OrderTotals from "./components/OrderTotals"
import TipPrecentajeForm from "./components/TipPrecentajeForm"
import { menuItems } from "./data/db"
import useOrder from "./hooks/useOrder"

function App() {

  const { order, tip, setTip, addItem, handleClickIncrease, handleClickDecrease, removeItem, saveOrder } = useOrder()

  return (
    <>
      <Header />

      <main className=" max-w-7xl h-[calc(100vh-80px)] overflow-y-scroll mx-auto space-y-6 md:space-y-0 grid md:grid-cols-2 py-8 md:py-10">
        <div className=" px-3 md:px-5">
          <h2 className=" text-3xl font-black text-center md:text-4xl">Menú</h2>

          <div className=" space-y-4 mt-6 md:mt-8">
            {menuItems.map( item => (
              <MenuItemList
                key={item.id}
                item={item}
                addItem={addItem}
              />
            ))}
          </div>
        </div>

        <div className=" px-3 border-l-2 md:border-orange-300 md:px-5">
          <h2 className=" text-3xl font-black text-center md:text-4xl">Consumo</h2>

          <div className=" mt-8 space-y-6">
            {order.length ? (
              <>
                <OrderContents
                  order={order}
                  handleClickIncrease={handleClickIncrease}
                  handleClickDecrease={handleClickDecrease}
                  removeItem={removeItem}
                />

                <TipPrecentajeForm
                  setTip={setTip}
                />

                <OrderTotals
                  order={order}
                  tip={tip}
                  saveOrder={saveOrder}
                />              
              </>
            ) : 
              <p className=" text-lg text-center">La orden está vacía.</p>
            }
          </div>
        </div>
      </main>
    </>
  )
}

export default App

