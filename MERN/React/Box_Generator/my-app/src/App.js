import React, { useState } from 'react';
import Form from "./components/Form.js";
import Boxes from "./components/Boxes.js";
import './App.css';

// I'm trying to focus more so on the 'function' of react rather than the css styles because that always holds me up when I'm doing these assignments

function App() {
  const [colors, setColors] = useState([]);

  return (
    <div className="App">
      <h1>Box Generator</h1>
      <Form colors={ colors } setColors={ setColors } />
      <Boxes colors={ colors } />
    </div>
  );
}

export default App;
