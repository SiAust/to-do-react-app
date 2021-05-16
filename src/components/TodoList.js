import React from 'react';

// Importing components
import Todo from './Todo'

const TodoList = ({setTodos, todos, filterState}) => {
  
    return (
        <div className="todo-container">
            <ul className="todo-list">
               {todos.filter(todo => {
                   switch (filterState) {
                        case 'completed':
                            return todo.completed;
                        case 'uncompleted':
                            return !(todo.completed);
                        default:
                            return true;
                   }
               }).map(todo => (
                   <Todo 
                        todos={todos} 
                        key={todo.id} 
                        todo={todo} 
                        setTodos={setTodos} 
                    />
               ))}
            </ul>
        </div>
    );
}

export default TodoList;