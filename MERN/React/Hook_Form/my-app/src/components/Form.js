import React, { useState } from 'react'
import './Form.css'

function Form(props) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");

    return (
        <div>
            {/* Form entry */}
            <form className="formDiv">
                <div className="inputDiv">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" name="firstName" id="firstName" onChange={ (e) => setFirstName(e.target.value)} />
                </div>
                <div className="inputDiv">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" name="lastName" id="lastName" onChange={ (e) => setLastName(e.target.value)} />
                </div>
                <div className="inputDiv">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" onChange={ (e) => setEmail(e.target.value)} />
                </div>
                <div className="inputDiv">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" onChange={ (e) => setPassword(e.target.value)} />
                </div>
                <div className="inputDiv">
                    <label htmlFor="confirm">Confirm Password</label>
                    <input type="text" name="confirm" id="confirm" onChange={ (e) => setConfirm(e.target.value)} />
                </div>
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