import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function AuthorDisplay(props) {
    const [authors, setAuthors] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors")
            .then((res) => {
                console.log(res.data);
                setAuthors(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

    function deleteAuthor(id) {
        axios.delete("http://localhost:8000/api/" + id)
            .then((res) => {
                setAuthors(authors.filter((author) => author._id !== id));
            })
            .catch((err) => {
                console.log(err);
            })
    }

    function editAuthor(id) {
        navigate(`/edit/${id}`);
    }

    return (
        <div>
            <h1>Favorite Authors</h1>
            <Link to={`/new`}>Add an author</Link>
            <h3>We Have quotes by:</h3>
            <table>
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        authors.map((author, index) => {
                            return (
                                <tr key={index}>
                                    <td>{author.name}</td>
                                    <td>
                                        <button onClick={(e) => editAuthor(author._id)}>
                                            Edit
                                        </button>
                                        <button onClick={(e) => deleteAuthor(author._id)}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default AuthorDisplay;