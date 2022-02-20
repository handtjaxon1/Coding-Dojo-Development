import React, { useState } from 'react'
import './Form.css'

function Form(props) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");

    function LengthError(input, len) {
        if (input.length > 0 && input.length < len) {
            return <p className="errorMessage">Must be at least {len} characters</p>
        } else {
            return null;
        }
    }

    function PasswordError() {
        if (confirm.length > 0 && confirm !== password) {
            return <p className="errorMessage">Passwords must match</p>
        } else {
            return null;
        }
    }

    return (
        <div>
            <form className="formDiv">
                <div className="inputDiv">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" name="firstName" id="firstName" onChange={ (e) => setFirstName(e.target.value)} />
                </div>
                { LengthError(firstName,2) }
                <div className="inputDiv">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" name="lastName" id="lastName" onChange={ (e) => setLastName(e.target.value)} />
                </div>
                { LengthError(lastName,2) }
                <div className="inputDiv">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" onChange={ (e) => setEmail(e.target.value)} />
                </div>
                { LengthError(email,5) }
                <div className="inputDiv">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" onChange={ (e) => setPassword(e.target.value)} />
                </div>
                { LengthError(password,8) }
                <div className="inputDiv">
                    <label htmlFor="confirm">Confirm Password</label>
                    <input type="text" name="confirm" id="confirm" onChange={ (e) => setConfirm(e.target.value)} />
                </div>
                { PasswordError() }
            </form>

            <div className="formDiv">
                <h3>Your Form Data</h3>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confirm}</p>
            </div>
        </div>
    );
}

export default Form;