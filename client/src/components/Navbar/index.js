import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Home
      </Link>
      <br/>
      <div>
        <Link
          to="/about"
          className={
            window.location.pathname === "/about"
              ? "nav-link active"
              : "nav-link"
          }
        >
          About
        </Link>
        <br/>
        <Link
          to="/family"
          className={
            window.location.pathname === "/family"
              ? "nav-link active"
              : "nav-link"
          }
        >
          Family Photos
        </Link>
        <br/>
        <Link
          to="/activities"
          className={
            window.location.pathname === "/activities"
              ? "nav-link active"
              : "nav-link"
          }
        >
          Activities
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
