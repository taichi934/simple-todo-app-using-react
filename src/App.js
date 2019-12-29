import React, {useState} from 'react';
// import logo from './logo.svg';
// import './App.css';
import Todos from './Todos';
import './App.css'

function App() {
  const [todos, setTodos] = useState([
    {
      text: "Learn about React",
      completed: false
    }, {
      text: "Also learn about React Hooks",
      completed: false
    }, {
      text: "Create Todo app using React",
      completed: false
    },
  ]);

  return (
    <div className="app">
      <header className="App-header">
        <h1 style={{color: "#e8e8e8"}}>Todo App using React Hooks</h1>
        <Todos todos={todos} setTodos={setTodos}/>
      </header>
    </div>
  );
}

export default App;
