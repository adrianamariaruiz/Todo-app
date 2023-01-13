import { useState } from "react"

const TodoCreate = ({createTodo}) => {

  const [titleTodo, setTitleTodo] = useState('')

  const handleSubmitAdd = (e) => {
    e.preventDefault()
    console.log('diste click', titleTodo)

    if(!titleTodo.trim){
      return setTitleTodo('')
    }
    createTodo(titleTodo)
    setTitleTodo('')
  }

  return (
    <form onSubmit={handleSubmitAdd} className='flex mt-6 gap-4 overflow-hidden py-4 px-4 bg-white items-center rounded-md dark:bg-gray-800 transition-all duration-1000'>
        <span className='inline-block h-5 w-5 rounded-full border-2'></span>
        <input 
        type="text" 
        placeholder='Ingrese la tarea'
        className='w-full outline-none dark:bg-gray-800 transition-all duration-1000'
        value={titleTodo}
        onChange={(e) => setTitleTodo(e.target.value)}
        />
    </form>
  )
}

export default TodoCreate