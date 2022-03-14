import './App.css';
import React, { useState } from 'react';
import Form from "./components/Form.js";
import List from "./components/List.js";

function App() {
  const [list, setList] = useState([]);

  return (
    <div className="App">
      <h1>TODO List</h1>
      <Form list={ list } setList={ setList }/>
      <List list={ list } setList={ setList }/>
    </div>
  );
}

export default App;