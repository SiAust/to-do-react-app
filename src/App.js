import React, { useState } from "react";
import './App.css';
// importing components
import Form from './components/Form';
import TodoList from './components/TodoList';


function App() {
  // Global state
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [filterState, setFilterState] = useState('all');

  return (
    <div className="App">
      <header>
        <h1>Simon's ToDo List</h1>
      </header>
      <Form
        inputText={inputText} 
        setInputText={setInputText}
        todos={todos} 
        setTodos={setTodos} 
        setFilterState={setFilterState}
      />
      <TodoList 
        setTodos={setTodos} 
        todos={todos} 
        filterState={filterState}
      />
    </div>
  );
}

export default App;
