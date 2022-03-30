import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./views/Main";
import Detail from "./components/Detail";
import Update from "./components/Update";
// Remove the below lines in favor of using a "View" component above named Main
// import PersonForm from "./components/PersonForm";
// import PersonList from "./components/PersonList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Adding the default attribute makes this the default path/route */}
          <Route element={<Main />} path="/people" default />
          <Route element={<Detail />} path="/people/:id" />
          <Route element={<Update />} path="/people/edit/:id" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;