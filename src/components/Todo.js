import React from 'react'


const Todo = ({todo, todos, setTodos}) => {
    // Event handlers
    const deleteHandler = (e) => {
        setTodos(todos.filter((element) => element.id !== todo.id))
    }
    const completedHandler = (e) => {
        setTodos(
            todos.map((el) => {
            if(el.id === todo.id) {
                return{
                    ...el, 
                    completed: !el.completed
                }
            }
            return el;
        }))
    }
    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
                {todo.text}
            </li>
            <button onClick={completedHandler} className="complete-btn"><i className="fas fa-check"></i></button>
            <button onClick={deleteHandler} className="trash-btn"><i className="fas fa-trash"></i></button>
        </div>
    )
}

export default Todo;