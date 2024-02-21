/// DEPENDENCY IMPORT ///

import React from "react";

///--///

/// FILE IMPORTS ///

import "./AboutUs.css";
import Ertiga from "../../assets/cars/ertiga-exterior.jpeg";
import Rumion from "../../assets/cars/Toyota_Rumion.jpg";
///--///
export default function AboutUs() {
  return (
    <section id="aboutUs" className="aboutUs--main">
      {" "}
      <div className="aboutUs--top">
        <div className="aboutUs--h1">SA Driven E-hailing Servises</div>
        <div className="aboutUs--p">
          Urban Drive is commited to bringing a safe and reliable e-hailing
          service powered by our local team of dedicated staff managed by a 100%
          south african owned company
        </div>
      </div>
      <div className="cars2">
        <div className="cars--info">
          {" "}
          <div className="car--points">
            <span className="car--points--heading">Effecient Service</span>
            <p>
              With a quick response time and drivers that won't let you down
              when you need them most, our service is quality proven.
            </p>
          </div>
          <div className="car--points">
            <span className="car--points--heading">Professional Service</span>
            <p>
              Professionally trained drivers who will treat you like a world
              calss citizen moving you with smooth and relaxing drives to your
              destination.
            </p>
          </div>
          <div className="car--points">
            <span className="car--points--heading">Safety and Security</span>
            <p>
              With the risign crime rate, safety is our number one priority to
              all our customers. Our drivers are trained to handle dangerous and
              adverse conditions to keep you safe and comfortable throuout your
              entire trip with us
            </p>
          </div>
        </div>
      </div>
      {/* SECOND CAR SECTION */}
      <div className="cars2">
        <img className="cars--image" src={Ertiga} alt="Ertiga" />
        <img className="cars--image" src={Rumion} alt="Ertiga" />
      </div>
    </section>
  );
}
