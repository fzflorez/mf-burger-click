export default function Header() {
  return (
    <header className=" bg-orange-400 py-2 md:py-4 shadow-md">
      <div className=" max-w-screen-2xl w-full mx-auto flex flex-col items-center justify-between md:flex-row px-3 md:px-6">
        <div className=" flex items-center justify-center space-x-3 md:justify-start">
          <h1 className=" text-3xl text-white font-black md:text-4xl">
            BurgerClick
          </h1>
          <div className="flex justify-center items-center">
            <img
              src="images/burger.png"
              alt="Imagen de Hamburguesa"
              className="w-14 md:w-16"
            />
          </div>
        </div>
        <h3 className=" text-white font-semibold text-lg text-center md:text-xl md:text-right">
          100% Artesanal
        </h3>
      </div>
    </header>
  )
}
