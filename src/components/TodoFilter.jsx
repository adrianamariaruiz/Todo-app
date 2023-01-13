
const TodoFilter = () => {
  return (
    <section className='container mx-auto mt-6'>
        <div className='flex bg-white p-4 rounded-md justify-center gap-4'>
        <button className='hover:text-blue-400'>Todo</button>
        <button className='hover:text-blue-400'>Activo</button>
        <button className='hover:text-blue-400'>Terminado</button>
        </div>
    </section>
  )
}

export default TodoFilter