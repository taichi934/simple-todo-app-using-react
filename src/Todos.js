import React from 'react';
import Todo from './Todo.js';
import AddForm from './AddForm';

const Todos = ({todos, setTodos}) => {

    return (
        <div className="todo-list">
            {
                todos.map((todo, index) => (
                    <Todo key={index} index={index} text={todo.text} todos={todos} setTodos={setTodos}/>
                ))
            }
            <AddForm todos={todos} setTodos={setTodos}/>
        </div>
    );
};

export default Todos;