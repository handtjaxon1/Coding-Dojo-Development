import React, { useState } from "react";
import axios from "axios";

function ProductForm(props) {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0.0);
    const [description, setDescription] = useState("");

    function handleOnSubmit(e) {
        e.preventDefault();
        axios.post("http://localhost:8000/api/create", {
            title,
            price,
            description
        })
            .then((res) => {
                console.log(res);
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <form onSubmit={handleOnSubmit}>
            <div>
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="price">Price</label>
                <input
                    type="text"
                    id="price"
                    name="price"
                    onChange={(e) => setPrice(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="description">Description</label>
                <input
                    type="text"
                    id="description"
                    name="description"
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <input type="submit" />
        </form>
    )
}

export default ProductForm;