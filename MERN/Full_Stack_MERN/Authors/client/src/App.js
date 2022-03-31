import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthorDisplay from "./components/AuthorDisplay";
import AuthorAdd from "./components/AuthorAdd";
import AuthorEdit from "./components/AuthorEdit";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<AuthorDisplay />} path="/" default/>
          <Route element={<AuthorAdd />} path="/new" default/>
          <Route element={<AuthorEdit />} path="/edit/:id" default/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
