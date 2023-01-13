
const TodoFilter = ({changeFilterButton, option}) => {
  return (
    <section className='container mx-auto mt-6 transition-all duration-1000'>
        <div className='flex bg-white p-4 rounded-md justify-center gap-4 dark:bg-gray-800'>
        <button 
          className={`${option === "all" ? "text-blue-500 hover:text-gray-400" : "text-gray-400 hover:text-blue-500"} `} 
          onClick={() => changeFilterButton('all')}
        >Todo</button>
        <button 
          className={`${option === "active" ? "text-blue-500 hover:text-gray-400" : "text-gray-400 hover:text-blue-500"}`}
          onClick={() => changeFilterButton('active')}
        >Activo</button>
        <button 
          className={` ${option === "completed" ? "text-blue-500 hover:text-gray-400" : "text-gray-400 hover:text-blue-500"}`}
          onClick={() => changeFilterButton('completed')}
        >Terminado</button>
        </div>
    </section>
  )
}

export default TodoFilter