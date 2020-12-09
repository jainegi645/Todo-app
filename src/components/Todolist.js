import React from 'react'
import Todo from "./Todo"


const TodoList = ({todos,setTodos,filteredTodos}) => {
 
console.log(filteredTodos)
    return(
        <div className="todo-container">
        <ul className="todo-list">
            {filteredTodos.map((todo) => (     //acces to each todo using map
                
                <Todo 
                setTodos={setTodos}
                todos={todos}
                todo={todo}
                 key={todo.id} 
                 text={todo.text}/>
                 
            )) }
        
        </ul>
        </div>
    )
}

export default TodoList;