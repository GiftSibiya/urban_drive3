/// DEPENDENCY IMPORT ///

import React from "react";

///--///

/// FILE IMPORTS ///

import "./Footer.css";
import urbanLogo from "../../assets/logo/urban_drive_logo.png";

///--///

export default function Footer() {
  return (
    <section className="footer--main">
      <div className="footer--sect">
        {/* FIRST SECTION */}
        <div className="footer--sect1">
          <img className="footerlogo" src={urbanLogo} alt="urban driver logo" />
          <div className="socials"></div>
        </div>
        {/* -- */}

        {/* SECOND SECTION */}

        <div className="footer--sect2">
          <span className="footer--contact--header">CONTACT US</span>
          <div className="footer--contact--paragraph">
            <span>Email Imformation</span>
            <span>Location Imformation</span>
            <span>Contact Numbers</span>
          </div>
        </div>

        {/* -- */}

        {/* SECOND SECTION */}

        <div className="footer--sect3">
          <div className="sub--text">
            <span>SUBSCRIBE</span>
            <span>
              Enter Your Email To Get Notified About Our Lates Deals And Offers
            </span>
          </div>
          <div className="sub--input">
            <input
              className="sub--input--field"
              placeholder="Your Email"
            ></input>
          </div>
        </div>

        {/* -- */}
      </div>
      <div className="copyright">
        &copy; 2024 Copyright Inc. All Rights Reserved{" "}
      </div>
    </section>
  );
}
