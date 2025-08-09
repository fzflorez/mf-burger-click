export default function Header() {
  return (
    <header className="p-6 bg-slate-900">
      <div className=" max-w-screen-xl w-full mx-auto flex justify-center sm:justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center font-bold text-lg sm:text-xl text-white">B</div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white">BurgerClick</h1>
        </div>
        <h3 className="hidden sm:flex text-yellow-400 text-base sm:text-lg">Sabor, calidad, rapidez.</h3>
      </div>
    </header>
  )
}
