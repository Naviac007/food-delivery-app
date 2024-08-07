
function Header() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-amber-500 p-2">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
            <span className="font-semibold text-xl">FOOD Delivery</span>
        </div>
        <button className="text-sm px-3 py-2 leading-none border rounded-full md:rounded text-white border-white hover:border-transparent hover:text-amber-500 hover:bg-white">
            Admin
        </button>

    </nav>
  )
}

export default Header