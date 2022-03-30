import React, { useState } from "react";
import axios from "axios";

function ProductForm(props) {
    const {products, setProducts} = props;

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    function handleOnSubmit(e) {
        e.preventDefault();
        axios.post("http://localhost:8000/api/products", {
            title,
            price,
            description
        })
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setProducts([...products], res.data);
                setTitle("");
                setPrice("");
                setDescription("");
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div>
            <h1>Product Manager</h1>
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
        </div>
    );
}

export default ProductForm;