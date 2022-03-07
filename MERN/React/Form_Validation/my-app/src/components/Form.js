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

function validateEmail(emailInput) {
    var emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailInput.value.match(emailFormat);
}

function Form(props) {
    const [state, dispatch] = useReducer(reducer, initialState);

    function handleChange(e) {
        const { name, value } = e.target;
        dispatch({
            type: name,
            payload: value
        });
    }

    return (
        <div>
            <form className="formDiv" action="#" method="post">
                <div className="inputDiv">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" name="firstName" />
                </div>
                <div className="inputDiv">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" name="lastName" />
                </div>
                <div className="inputDiv">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" />
                </div>
                <div className="inputDiv">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Form;
