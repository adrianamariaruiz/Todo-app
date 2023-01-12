
import CrossIcon from './components/CrossIcon'
import MoonIcon from './components/MoonIcon'

const App = () => {
  return (
    <div 
      className='min-h-screen bg-gray-200 bg-[url("./assets/images/bg-mobile-light.jpg")] bg-no-repeat bg-contain '
    >
      <header className='container mx-auto px-4 pt-8'>
        <div className='flex justify-between'>
          <h1 className='uppercase text-white text-2xl font-semibold tracking-[0.3em]'>todo</h1>
          <button type='button'><MoonIcon/></button> 
        </div>
        <form className='flex mt-6 gap-4 overflow-hidden py-4 px-4 bg-white items-center rounded-md'>
          <span className='inline-block h-5 w-5 rounded-full border-2'></span>
          <input 
            type="text" 
            placeholder='Ingrese la tarea'
            className='w-full outline-none'
            />
        </form>
      </header>

      <main className='container mx-auto px-4 mt-6'>
        <div className='bg-white rounded-md'>
          
          <article className='flex gap-4 p-4 border-b'>
            <button className='inline-block h-5 w-5 rounded-full border-2 flex-none'></button>
            <p className='text-gray-600 grow'>Complete el curso</p>
            <button className='flex-none'><CrossIcon/></button>
          </article>

          <article className='flex gap-4 p-4 border-b'>
            <button className='inline-block h-5 w-5 rounded-full border-2 flex-none'></button>
            <p className='text-gray-600 grow'>Complete el curso</p>
            <button className='flex-none'><CrossIcon/></button>
          </article>

          <article className='flex gap-4 p-4 border-b'>
            <button className='inline-block h-5 w-5 rounded-full border-2 flex-none'></button>
            <p className='text-gray-600 grow'>Complete el curso</p>
            <button className='flex-none'><CrossIcon/></button>
          </article>

          <section className='flex p-4 text-gray-500 justify-between'>
            <span>5 items</span>
            <button>eliminar tareas cumplidas</button>
          </section>
        </div>
        
      </main>

      <section className='container mx-auto mt-6 p-4 '>
        <div className='flex bg-white p-4 rounded-md justify-center gap-4'>
          <button className='hover:text-blue-400'>Todo</button>
          <button className='hover:text-blue-400'>Activo</button>
          <button className='hover:text-blue-400'>Terminado</button>
        </div>
      </section>

      <section className='mt-8 text-center'>Drag and drop</section>
      
    </div>
  )
}

export default App