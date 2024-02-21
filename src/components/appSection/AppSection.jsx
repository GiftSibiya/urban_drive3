/// DEPENDENCY IMPORT ///

import React from "react";

///--///

/// FILE IMPORTS ///

import "./AppSection.css";
import appPic from "../../assets/images/phone.jpg";

///--///

export default function AppSection() {
  return (
    <section className="appSection--main">
      <div className="app--pic">
        <img className="app--img" src={appPic} />
      </div>
      <div className="app--desc">
        <span className="app--span1">AFFORDABLE RIDES JUST A CLICK AWAY</span>
        <span className="app--span">
          Downlaod our application for the best rides in mzansi
        </span>
        <span className="app--span--btn">App Coming Soon... </span>
      </div>
    </section>
  );
}
