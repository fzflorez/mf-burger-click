export default function Header() {
  return (
    <header className=" bg-orange-400 h-20 grid items-center md:grid-cols-2 md:px-10">
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
    </header>
  )
}
