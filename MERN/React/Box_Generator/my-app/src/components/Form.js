import React, { useState }  from "react";

function Form(props) {
    const [currentColor, setCurrentColor] = useState("");

    // I know there's a way to set these as part of one line but I can't recall
    const colors = props.colors;
    const setColors = props.setColors;

    function handleSubmit(e) {
        e.preventDefault();
        setColors([...colors, currentColor])
    }

    return (
        <form onSubmit={ handleSubmit }>
            <label htmlFor="color">Color</label>
            <input
                type="text"
                name="color"
                onChange={ (e) => setCurrentColor(e.target.value) }
            />
            <input type="submit" value="Add" />
        </form>
    );
}

export default Form;