import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function AuthorAdd(props) {
    const [name, setName] = useState("");
    const navigate = useNavigate();

    function handleOnSubmit(e) {
        e.preventDefault();
        axios.post("http://localhost:8000/api/authors", {
            name
        })
            .then((res) => {
                console.log(res.data);
                setName("");
                navigate("/");
            })
            .catch((err) => {
                console.log(err);
            })
    }

    // This works but gives warnings it seems. Haven't been able to determine why.
    function handleOnCancel(e) {
        navigate("/");
    }

    return (
        <div>
            <h1>Favorite Authors</h1>
            <Link to={"/"}>Home</Link>
            <h3>Add a new author:</h3>
            <form onSubmit={handleOnSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <button onClick={(e) => handleOnCancel(e)}>Cancel</button>
                <button>Submit</button>
            </form>
        </div>
    );
}

export default AuthorAdd;