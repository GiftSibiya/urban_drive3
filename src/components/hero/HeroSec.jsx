/// DEPENDENCY IMPORT ///

import React from "react";

///--///

/// FILE IMPORTS ///

import "./HeroSec.css";
import heroImg from "../../assets/images/HeroImg.jpg";

///--///
export default function HeroSec() {
  return (
    <section id="hero" className="hero--main">
      {" "}
      <img src={heroImg} className="hero--img" />
      <div className="hero--content">
        <div className="hero--h1">Mzansi's #1 ehailing Service</div>
        <div className="hero--p">Efficiency In Motionn</div>
      </div>
    </section>
  );
}
