import { Droppable, Draggable } from "@hello-pangea/dnd";
import CrossIcon from "./CrossIcon"
import IconCheck from "./IconCheck"

const TodoList = ({ todo, deleteTodo, updateTodo, todoItems, clearCompleted }) => {


    return (
        <>
            <Droppable droppableId="todo">
                {
                    (droppableProvided) => (
                        <div
                            ref={droppableProvided.innerRef}
                            {...droppableProvided.droppableProps}
                            className='bg-white rounded-t-md mt-6 overflow-hidden dark:bg-gray-800 transition-all duration-1000'>
                            {
                                todo.map((item, index) => (
                                    <Draggable key={item.id} index={index} draggableId={`${item.id}`}>
                                        {
                                            (draggableProvided) => (
                                                <article 
                                                    ref={draggableProvided.innerRef}
                                                    {...draggableProvided.draggableProps}
                                                    {...draggableProvided.dragHandleProps}
                                                    className='flex gap-4 p-4 border-b dark:bg-gray-800'>
                                                    {
                                                        item.completed
                                                            ? (<button className='h-5 w-5 rounded-full border-2 flex-none bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex justify-center items-center'
                                                                onClick={() => updateTodo(item.id)}
                                                            >
                                                                <IconCheck />
                                                            </button>
                                                            ) : (
                                                                <button className='inline-block h-5 w-5 rounded-full border-2 flex-none'
                                                                    onClick={() => updateTodo(item.id)}
                                                                ></button>
                                                            )
                                                    }

                                                    <p className={`text-gray-600 grow dark:text-gray-300 ${item.completed && "line-through"}`}>{item.title}</p>
                                                    <button
                                                        className='flex-none'
                                                        onClick={() => deleteTodo(item.id)}
                                                    >
                                                        <CrossIcon />
                                                    </button>
                                                </article>
                                            )
                                        }

                                    </Draggable>
                                ))
                            }
                            {droppableProvided.placeholder}
                        </div>
                    )
                }


            </Droppable>

            <section className='flex p-4 text-gray-500 justify-between bg-white rounded-b-md dark:bg-gray-800 dark:text-gray-300 transition-all duration-1000'>
                <span>Quedan {todoItems} items</span>
                <button
                    className="hover:text-blue-500"
                    onClick={clearCompleted}
                >eliminar tareas cumplidas</button>
            </section>
        </>
    )
}

export default TodoList