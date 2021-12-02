import React from "react";
import githublogo from "../sass/GitHub-Mark/PNG/GitHub-Mark-Light-32px.png";
import twitterlogo from "../sass/Twitter logo/PNG/2021 Twitter logo - blue.png";
import linkedinlogo from "../sass/LinkedIn-Logos/LI-In-Bug.png";

function Footer() {
  return (
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
  );
}

export default Footer;
