import React from 'react'
import Todo from "./Todo"


const TodoList = ({todos}) => {
 
    return(
        <div className="todo-container">
        <ul className="todo-list">
            {todos.map((todo) => (     //acces to each todo using map
                <Todo text={todo.text}/>
            ))}
        
        </ul>
        </div>
    )
}
export default TodoList;