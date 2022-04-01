import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function ProductUpdate(props) {
    const { id } = useParams();
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/api/" + id)
            .then((res) => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

    function updateProduct(e) {
        e.preventDefault();
        axios.put("http://localhost:8000/api/" + id, {
            title,
            price,
            description
        })
            .then((res) => {
                console.log(res);
                navigate("/");
                setTitle("");
                setPrice("");
                setDescription("");
            })
            .catch((err) => {
                console.log(err);
            })
    };

    return (
        <div>
            <h1>Update Product</h1>
            <form onSubmit={updateProduct}>
            <div>
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        onChange={ (e) => setTitle(e.target.value) }
                        value={ title }
                    />
                </div>
                <div>
                    <label htmlFor="price">Price</label>
                    <input
                        type="text"
                        id="price"
                        name="price"
                        onChange={ (e) => setPrice(e.target.value) }
                        value={ price }
                    />
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <input
                        type="text"
                        id="description"
                        name="description"
                        onChange={ (e) => setDescription(e.target.value) }
                        value={ description }
                    />
                </div>
                <input type="submit" value="Update"/>
            </form>
        </div>
    );
}

export default ProductUpdate;