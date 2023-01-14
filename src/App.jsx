
import { useEffect, useState } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import TodoCreate from './components/TodoCreate'
import TodoFilter from './components/TodoFilter'
import TodoList from './components/TodoList'

// const initialState = [
//   {id: 1, title: 'study english', completed: true},
//   {id: 2, title: 'study react', completed: false},
//   {id: 3, title: 'study MySQL', completed: true},
//   {id: 4, title: 'app', completed: false},
// ]

const initialState = JSON.parse(localStorage.getItem("todo")) || [];

const App = () => {

  const [todo, setTodo] = useState(initialState)
  const [option, setOption] = useState('all')

  useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(todo))
  }, [todo])

  const createTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title,
      completed: false
    }
    setTodo([...todo, newTodo])
  }

  const deleteTodo = (id) => {
    setTodo(todo.filter((item) => item.id !== id))
  }

  const updateTodo = (id) => {
    setTodo(todo.map(item => item.id === id ? {...item, completed: !item.completed } : item))
  }

  const todoItems = todo.filter(item => !item.completed).length

  const clearCompleted = () => {
    setTodo(todo.filter(item => !item.completed))
  }

  const filterTodo = () => {
    switch (option) {
      case 'all':
        return todo;
      case 'active':
        return todo.filter(item => !item.completed);
      case 'completed':
        return todo.filter(item => item.completed);
      default:
        todo;
    }
  }

  const changeFilterButton = (option) => setOption(option) 
  

  return (
    <div className='min-h-screen bg-gray-200 bg-[url("./assets/images/bg-mobile-light.jpg")] bg-no-repeat bg-contain dark:bg-gray-900 dark:bg-[url("./assets/images/bg-mobile-dark.jpg")] transition-all duration-1000 md:bg-[url("./assets/images/bg-desktop-light.jpg")] md:dark:bg-[url("./assets/images/bg-desktop-dark.jpg")]'>
      
      <Header/>

      <main className='container mx-auto px-4 mt-6 md:max-w-xl'>
        <TodoCreate createTodo={createTodo}/>
       
        {/* TodoList  (TodoItem) TodoUpdate & TodoDelete*/}
        <TodoList 
          todo={filterTodo()} 
          deleteTodo={deleteTodo} 
          updateTodo={updateTodo} 
          todoItems={todoItems} 
          clearCompleted={clearCompleted}
        />
        
        <TodoFilter changeFilterButton={changeFilterButton} option={option}/>
      </main>

      <Footer/>    
    </div>
  )
}

export default App