
import { useState } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import TodoCreate from './components/TodoCreate'
import TodoFilter from './components/TodoFilter'
import TodoList from './components/TodoList'

const initialState = [
  {id: 1, title: 'study english', completed: true},
  {id: 2, title: 'study react', completed: false},
  {id: 3, title: 'study MySQL', completed: true},
  {id: 4, title: 'app', completed: false},
]

const App = () => {

  const [todo, setTodo] = useState(initialState)
  const [option, setOption] = useState('all')

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
    <div className='min-h-screen bg-gray-200 bg-[url("./assets/images/bg-mobile-light.jpg")] bg-no-repeat bg-contain'>
      
      <Header/>

      <main className='container mx-auto px-4 mt-6'>
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