import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import logo from "./family.png";
import "./App.css";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <Wrapper>
          <Navbar />
          <header className="App-header">
            <h1>Hello, My Name is Greg!!!</h1>
          </header>
          <p>
            <img src={logo} className="App-logo" alt="logo" />
          </p>
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
