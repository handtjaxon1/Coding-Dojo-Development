import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductDetails(props) {
    const { id } = useParams();
    const [product, setProduct] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/" + id)
            .then((res) => {
                console.log(res.data);
                setProduct(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    })

    return (
        <div>
            <h1>{product.title}</h1>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
        </div>
    );
}

export default ProductDetails;