import React, { useEffect, useState } from "react";
import axios from "axios";

function PersonForm() {
    // Code used for the default Hello World testing
    // const [message, setMessage] = useState("Loading...");

    // useEffect(() => {
    //     axios.get("http://localhost:8000/api")
    //         .then(res => setMessage(res.data.message))
    //         .catch(err => console.log(err))
    // }, []);

    // Kepp track of what is being type via the useState hook
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    // Handle when the form is submitted
    function handleOnSubmit(e) {
        // Prevent default form behavior, ie refreshing the page on submit
        e.preventDefault();
        // Make a post request to creat a new person
        axios.post("http://localhost:8000/api/people", {
            firstName, // This is shorthand syntax for firstName: firstName
            lastName
        })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
            .catch(err => console.log(err));
    }

    return (
        <form onSubmit={handleOnSubmit}>
            <p>
                <label htmlFor="firstName">First Name</label>
                <br/>
                {/* When the user types in this input, our onChange synthetic event runs this arrow function, setting that event's target's (input) value (what's typed into the input) to our updated state. You could call another function here instead of using the arrow function FYI. */}
                <input type="text" id="firstName" onChange={(e) => setFirstName(e.target.value)} />
            </p>
            <p>
                <label htmlFor="lastName">Last Name</label>
                <br/>
                <input type="text" id="lastName" onChange={(e) => setLastName(e.target.value)} />
            </p>
            <input type="submit"/>
        </form>
    );
}

export default PersonForm;