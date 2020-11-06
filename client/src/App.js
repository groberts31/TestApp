import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import logo from "./family.png";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Hello, My Name is Greg!!!</h1>
        </header>
        <p>
          <img src={logo} className="App-logo" alt="logo" />
        </p>
      </div>
    </Router>
  );
}

export default App;
