import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../sass/homepage.scss";

function Homepage() {
  return (
    <div className="home-page">
      <nav className="home-navbar">
        <div className="navbar-container">
          <p className="connectbutton">Logo Placeholder</p>
          <div className="spacer"></div>

          <Link to="/products" className="navbar-logo">
            <button className="connectbutton">Launch App</button>
          </Link>
        </div>
      </nav>
      <div className="main-body">
        <h1 id="main-title">Portal</h1>
      </div>
      <div className="spacer layer1"></div>
      <div className="bg"></div>
      <div className="footer">
        <div className="footer-content">
          <p>a</p>
          <p>a</p>
          <p>a</p>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
