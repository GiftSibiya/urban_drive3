/// DEPENDENCY IMPORT ///

import React from "react";

///--///

/// FILE IMPORTS ///

import "./HomeScreen.css";

///Components
import HeaderComp from "../components/header/HeaderComp";
import HeroSec from "../components/hero/HeroSec";
import AboutUs from "../components/aboutUs/AboutUs";
import Services from "../components/services/Services";
import AppSection from "../components/appSection/AppSection";
import ContactUs from "../components/contactUs/ContactUs";
import Footer from "../components/footer/Footer";

///--///

export default function HomeScreen() {
  return (
    <>
      <header>
        <HeaderComp />
      </header>
      <body>
        <HeroSec />
        <AboutUs />
        <Services />
        <AppSection />
        <ContactUs />
      </body>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
