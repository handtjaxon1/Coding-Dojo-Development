import React, { useReducer } from 'react'
import './Form.css'

const initialState = {
    firstName: {
        value: "",
        error: null
    },
    lastName: {
        value: "",
        error: null
    },
    email: {
        value: "",
        error: null
    }
};

function reducer(state, action) {
    return {
        ...state,
        [action.type]: action.payload
    };
}

function Form(props) {
    return (
        <div>
            <form className="formDiv">
                <div className="inputDiv">
                    <label for="firstName">First Name</label>
                </div>
            </form>
        </div>
    )
}

export default Form;
