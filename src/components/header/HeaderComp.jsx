/// DEPENDENCY IMPORT ///

import React from "react";
import { Link as ScrollLink } from "react-scroll";

///--///

/// FILE IMPORTS ///

import "./HeaderComp.css";
import urbanLogo from "../../assets/logo/urban_drive_logo.png";

//PAGES
import Services from "../services/Services.jsx";
import Hero from "../hero/HeroSec.jsx";
import AboutUs from "../aboutUs/AboutUs.jsx";
import ContactUs from "../contactUs/ContactUs.jsx";

///--///
export default function HeaderComp() {
  return (
    <section className="header--main">
      <div className="header--con">
        <div className="logo">
          <img src={urbanLogo} className="main-logo" alt="Urban Drive Logo" />
        </div>
        <div className="link--con">
          <ScrollLink
            className="link--item"
            to="hero"
            smooth={true}
            duration={500}
          >
            Home
          </ScrollLink>
          <ScrollLink
            className="link--item"
            to="aboutUs"
            smooth={true}
            duration={500}
          >
            About Us
          </ScrollLink>
          <ScrollLink
            className="link--item"
            to="services"
            smooth={true}
            duration={500}
          >
            Services
          </ScrollLink>
          <ScrollLink
            className="link--item"
            to="contactUs"
            smooth={true}
            duration={500}
          >
            Contact Us
          </ScrollLink>
        </div>
      </div>
    </section>
  );
}
