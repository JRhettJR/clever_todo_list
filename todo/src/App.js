import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState(['Take out the trash.', 'Create a todo list using React.']);
  const [input, setInput] = useState('');
  console.log('JACOB', input);

  const addTodo = (event) => {
    event.preventDefault();
    console.log('RHETT', 'I am working!!!');
    setTodos([...todos, input]);
    setInput('');
    console.log(todos);   
  }

  return (
     <div className="App">
       <h1>Hello Clever Programmers!</h1>
       <input value={input} onChange={event => setInput(event.target.value)}></input>
       <button onClick={addTodo}>Add Todo</button>

       <ul>
         {todos.map(todo => (
           <li>{todo}</li>
         ))}
       </ul>
     </div>
  );
}

export default App;
