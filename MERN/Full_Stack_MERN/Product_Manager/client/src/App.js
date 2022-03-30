import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./views/Main";
import ProductDetails from "./components/ProductDetails";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Main />} path="/" default></Route>
          <Route element={<ProductDetails />} path="/:id" default></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;