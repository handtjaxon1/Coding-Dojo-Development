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
    }, []);

    function deleteProduct(id) {
        axios.delete("http://localhost:8000/api/" + id)
            .then((res) => {
                setProducts(products.filter((product) => product._id !== id));
                // removeFromDOM(id);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div>
            <h1>All Products:</h1>
            {
                products.map((product, index) => {
                    return (
                        <div key={index}>
                            <Link to={`/${product._id}`}>
                                {product.title}
                            </Link>
                            <span> | </span>
                            <Link to={`/edit/${product._id}`}>
                                Edit
                            </Link>
                            <span> | </span>
                            <button onClick={(e) => deleteProduct(product._id)}>
                                Delete
                            </button>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default ProductList;