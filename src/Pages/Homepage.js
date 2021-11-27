import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../sass/homepage.scss";

function Homepage() {
  return (
    <div>
      <nav className="home-navbar">
        <div className="navbar-container">
          <p className="connectbutton">Logo Placeholder</p>
          <div className="spacer"></div>

          <Link to="/products" className="navbar-logo">
            <button className="connectbutton">Launch App</button>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Homepage;
