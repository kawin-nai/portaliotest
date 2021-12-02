import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../sass/homepage.scss";
import smalllogo from "../sass/SVG/Portal Logo (4).svg";
import p1 from "../sass/SVG/Portal Logo (1).svg";
import Footer from "../Components/Footer";

function Homepage() {
  return (
    <div className="home-page">
      <nav className="home-navbar">
        <div className="navbar-container-homepage">
          <img src={smalllogo} alt="smalllogo" width="50px" id="portal-logo" />
          <div className="spacer"></div>

          <Link to="/products" className="navbar-logo">
            <button className="connectbutton">Launch App</button>
          </Link>
        </div>
      </nav>
      <h1 id="main-title">Portal</h1>
      <div className="main-body">
        <span className="dot"></span>
        <div>
          <img src={p1} alt="portalbackground" id="portal-background" />
          {/* <p className="main-page-desc">Background Portal</p> */}
          <h3 className="main-page-desc">Crowdfunding</h3>
        </div>
      </div>
      <div className="spacer layer1"></div>
      <div className="pre-footer"></div>
      <Footer />
    </div>
  );
}

export default Homepage;
