import React from 'react';

const Todo = ({index, text, todos, setTodos, }) => {
    const completeTask = ()=> {
        const newTodos = [...todos];
        newTodos[index].completed = !newTodos[index].completed
        setTodos(newTodos);
    }

    const removeTask = () => {
        const newTodos = todos.filter((todo, Index) => {
            return index !== Index;
        })
        setTodos(newTodos);
    }
    return (
        <div
            className='todo'
            style={{ textDecoration: todos[index].completed ? "line-through" : "" }}
        >
            {text}
            <div>
                <button onClick={ ()=> completeTask() }>
                    ✓
                </button>
                <button onClick={ ()=> removeTask() }>x</button>
            </div>
        </div>
    );
};

export default Todo;