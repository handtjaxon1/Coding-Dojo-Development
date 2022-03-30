import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function ProductList(props) {
    const {products, setProducts} = props;

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then((res) => {
                setProducts(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    });

    return (
        <div>
            <h1>All Products:</h1>
            {
                products.map((product, index) => {
                    return (
                        <div key={index}>
                            <Link to={`/${product._id}`}>{product.title}</Link>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default ProductList;