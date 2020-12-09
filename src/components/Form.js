import React from 'react'


const Form = ({ setInputText,status,setStatus, todos, setTodos, inputText }) => {
    //writing js here
    //this function work when input value changes
    const inputTextHandler = (e) => {
        //console.log(e.target.value); //takes event>target>its value
        setInputText(e.target.value);
    };
 
    // this fuction work when cliked on submit button
    const submiTodoHandler = (e) => {

        e.preventDefault(); //prevents the deault behaviour(stop refreshing)
        setTodos([
            ...todos, //expanding todos means if alrady have some todos,jsut pass it
            { text: inputText, completed: false, id: Math.random() * 1000 }, //this is object,if have new todos, add it.
        ]);
        setInputText("");
    };

 const statusHandler =(e) => {
     //console.log(e.target.value);
     setStatus(e.target.value);
  
 }
 //console.log(status);

    return (
        <form>
            <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" /> {/*value ={inuputText} to set change the state to empty string  when clicked on submit */}
            <button onClick={submiTodoHandler} className="todo-submit" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">all</option>
                    <option value="completed">completed</option>
                    <option value="uncompleted">uncompleted</option>
                </select>
            </div>
        </form>

    );
}
export default Form;