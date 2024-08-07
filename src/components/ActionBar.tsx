
interface ActionBarProps {
    openAddModal: () => void
    handleDelete: () => void
    serchParam: string
    updateSearchParam : (e: React.ChangeEvent<HTMLInputElement>) => void
}
function ActionBar(props: ActionBarProps) {
  return (
    <section className="px-5 w-full flex flex-col sm:flex-row justify-center mt-6 mb-2 items-center gap-5">
        <div className="flex p-2 w-full sm:w-fit  border rounded border-slate-400 focus-within:border-amber-500">
            <input type="text"  className="focus:outline-none w-full sm:w-fit" value={props.serchParam} onChange={props.updateSearchParam} placeholder="Search" id="search"/>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
        </div>
        <section className="flex w-full sm:w-fit justify-around sm:justify-end sm:gap-4">
            <button onClick={props.openAddModal} className="text-sm p-2 h-fit border rounded text-amber-500 border-amber-500 hover:border-transparent hover:text-white hover:bg-amber-500">
                Add
            </button>
            <button onClick={props.handleDelete} className="text-sm p-2 h-fit border rounded text-red-500 border-red-500 hover:border-transparent hover:text-white hover:bg-red-500">
                delete
            </button>
        </section>
    </section>
  )
}

export default ActionBar