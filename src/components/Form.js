import React from 'react'


const Form = ({ setInputText, todos, setTodos, inputText }) => {
    //writing js here

    const inputTextHandler = (e) => {
        console.log(e.target.value); //takes event>target>its value
        setInputText(e.target.value);
    };

    const submiTodoHandler = (e) => {

        e.preventDefault(); //prevents the deault behaviour(stop refreshing)
        setTodos([
            ...todos, //expanding todos means if alrady have some todos,jsut pass it
            { text: inputText, completed: false, id: Math.random() * 1000 }, //this is object,if have new todos, add it.
        ]);
        setInputText("");
    };

    return (
        <form>
            <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" /> {/*value ={inuputText} to set change the state to empty string  when clicked on submit */}
            <button onClick={submiTodoHandler} className="todo-submit" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select name="todos" className="filter-todo">
                    <option value="all">all</option>
                    <option value="checked">checked</option>
                    <option value="unchecked">unchecked</option>
                </select>
            </div>
        </form>

    );
}
export default Form;