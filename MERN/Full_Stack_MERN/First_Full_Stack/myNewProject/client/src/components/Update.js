import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function Update(props) {
    const {id} = useParams();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const navigate = useNavigate();

    // Need to retrive the current values for this person so we can fill in the form with what is in the database currently (prior to updating)
    useEffect(() => {
        axios.get("http://localhost:8000/api/people/" + id)
            .then((res) => {
                console.log("Hello");
                setFirstName(res.data.firstName);
                setLastName(res.data.lastName);
            })
            .catch((err) => {
                console.log(err);
            })
    })

    function updatePerson(e) {
        e.preventDefault();
        axios.put("http://localhost:8000/api/people/" + id, {
            firstName,
            lastName
        })
            .then((res) => {
                console.log(res);
                navigate("/people"); // reroute back to our people page where everything is displayed
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div>
            <h1>Update a Person</h1>
            <form onSubmit={updatePerson}>
                <p>
                    <label htmlFor="firstName">First Name</label><br/>
                    <input type="text"
                        id="firstName"
                        name="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)} />
                </p>
                <p>
                    <label htmlFor="lastName">Last Name</label><br/>
                    <input type="text"
                        id="lastName"
                        name="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)} />
                </p>
                <input type="submit" />
            </form>
        </div>
    );
}

export default Update;
