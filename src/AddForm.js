import React, {useState} from 'react';

const AddForm = ({todos, setTodos}) => {
    const [text, setText] = useState("");

    const onSubmitHandling = (event) => {
        event.preventDefault();
        if(!text) return;
        // addTodo(text);
        setTodos([
            ...todos,
            {
                text: text
            }
        ])
        setText("");
    };

    const onChangeHandling = (event) => {
        setText(event.target.value)
    };

    return (
        <form onSubmit={onSubmitHandling}>
            <input
                type="text"
                value={text}
                onChange={onChangeHandling}
                placeholder='add todo...'
                className="input"
            />
            <button>Add</button>
        </form>
    );
}

export default AddForm;