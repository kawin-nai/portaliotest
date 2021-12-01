import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../sass/homepage.scss";
import smalllogo from "../sass/SVG/Portal LOGO-02.svg";
import githublogo from "../sass/GitHub-Mark/PNG/GitHub-Mark-Light-32px.png";
import twitterlogo from "../sass/Twitter logo/PNG/2021 Twitter logo - blue.png";
import linkedinlogo from "../sass/LinkedIn-Logos/LI-In-Bug.png";

function Homepage() {
  return (
    <div className="home-page">
      <nav className="home-navbar">
        <div className="navbar-container-homepage">
          <p className="connectbutton">Logo Placeholder</p>
          <img src={smalllogo} alt="smalllogo" width="50px" />
          <div className="spacer"></div>

          <Link to="/products" className="navbar-logo">
            <button className="connectbutton">Launch App</button>
          </Link>
        </div>
      </nav>
      <div className="main-body">
        <h1 id="main-title">Portal</h1>
        <div>
          <p className="main-page-desc">Background Portal</p>
          <h3 className="main-page-desc">Crowdfunding</h3>
        </div>
      </div>
      <div className="spacer layer1"></div>
      <div className="footer">
        <div className="footer-content">
          <a href="https://github.com/qazseee" target="_blank">
            <img src={githublogo} alt="github1" />
          </a>
          <a href="https://twitter.com" target="_blank">
            <img
              src={twitterlogo}
              alt="twitter"
              width="32px"
              className="twitter-logo"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/kawin-naipongprasit-0074121b9/"
            target="_blank"
          >
            <img
              src={linkedinlogo}
              alt="linkedin"
              width="32px"
              className="twitter-logo"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
