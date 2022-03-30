import React, { useState } from "react";
import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";

function Main(props) {
    const [products, setProducts] = useState([]);

    // Technically not needed as we can do this from within the ProductList itself since the state doesn't need to be lifted.
    // function removeFromDOM(id) {
    //     setProducts(products.filter((product) => product._id !== id));
    // }

    return (
        <div>
            <ProductForm products={products} setProducts={setProducts} />
            <hr/>
            <ProductList products={products} setProducts={setProducts} />
            {/* Old method below was replaced by the method above since the function doesn't need to be passed as a prop */}
            {/* <ProductList products={products} setProducts={setProducts} removeFromDOM={removeFromDOM} /> */}
        </div>
    );
}

export default Main;