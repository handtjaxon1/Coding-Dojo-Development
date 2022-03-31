import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function AuthorEdit(props) {
    const { id } = useParams();
    const [name, setName] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/api/" + id)
            .then((res) => {
                console.log(res.data);
                setName(res.data.name);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

    function updateAuthor(e) {
        e.preventDefault();
        axios.put("http://localhost:8000/api/" + id, {
            name
        })
            .then((res) => {
                console.log(res);
                navigate("/")
            })
            .catch((err) => {
                console.log(err);
            })
    }

    function handleOnCancel(e) {
        navigate("/");
    }

    return (
        <div>
            <h1>Edit Author</h1>
            <Link to={"/"}>Home</Link>
            <form onSubmit={updateAuthor}>
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

export default AuthorEdit;