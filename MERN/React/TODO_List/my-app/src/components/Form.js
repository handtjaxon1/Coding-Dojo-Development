import React, { useState } from 'react';

function Form(props) {
    const [todo, setTodo] = useState("");

    const list = props.list;
    const setList = props.setList;

    function handleSubmit(event) {
        event.preventDefault();
        setList([
            ...list,
            {
                text: todo,
                checked: false,
                id: Math.floor(Math.random() * 100000000).toString()
            }
        ]);
        setTodo("");
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input
                type="text"
                name="todoItem"
                onChange={ (e) => setTodo(e.target.value) }
                value={ todo }
            />
            <input type="submit" value="Add" />
        </form>
    );
}

export default Form;