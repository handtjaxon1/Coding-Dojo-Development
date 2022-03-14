import React from 'react';
import "./List.css"

function List(props) {
    const list = props.list;
    const setList = props.setList;

    function handleChecked(item) {
        item.checked = !item.checked;
        setList([...list]);
    }

    function isChecked(checked) {
        return checked ? "checked" : "unchecked";
    }

    function deleteItem(id) {
        setList(
            list.filter((item, index) => {
                return item.id !== id;
            })
        );
    }

    // Addmitedly I was stuck on the implementation of this part and after trying multiple solutions I consulted the assignment solution for guidance with completing this part of the assignment"
    return (
        <div>
            { list.map((item, index) => (
                <div className={isChecked(item.checked)} key={item.id}>
                    <p>{item.text}</p>
                    <input type="checkbox" onChange={ () => handleChecked(item) } value={item.checked} />
                    <button onClick={ () => deleteItem(item.id) }>Delete</button>
                </div>
            ))}
        </div>
    );
}

export default List;