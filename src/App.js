import './App.css';
import React, {useState} from 'react'
import Form from "./components/Form"
import TodoList from "./components/Todolist"



function App() {
// write js here
const [inputText,setInputText] = useState("");
const [todos,setTodos] = useState([]);
  return (
   
    <div className="App">
    <header>Jai's Todo List</header>
    <Form inputText={inputText} todos ={todos} setTodos={setTodos} setInputText= {setInputText}/>
    <TodoList todos={todos}/>
    </div>
  );
}

export default App;
