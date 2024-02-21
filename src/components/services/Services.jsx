/// DEPENDENCY IMPORT ///

import React from "react";

///--///

/// FILE IMPORTS ///

import "./Services.css";

// IMAGES
import servicePic from "../../assets/cars/ertiga-exterior.jpeg";
import passenger from "../../assets/images/passenger.jpg";
import delivery from "../../assets/images/delivery.jpg";
import shuttle from "../../assets/images/shuttle.jpg";
///--///
export default function Services() {
  return (
    <section id="services" className="services-main">
      {/* SERVICE HEADING */}
      <div className="service--header">OUR SERVICES INCLUDE</div> {/* -- */}
      {/* SERVICE TABS */}
      <div className="service--tabs">
        <div className="service--con">
          <div className="service--tab--pic">
            <img className="service--pic" src={passenger} />
          </div>
          <div className="service--tab--heading"> Affordable Rides</div>
          <div className="service--tab--p">
            Commited to bringing you the best e-hailing prices in South Africa
            for you and your companion.
          </div>
        </div>
        <div className="service--con">
          <div className="service--tab--pic">
            <img className="service--pic" src={delivery} />
          </div>
          <div className="service--tab--heading"> Courier Services</div>
          <div className="service--tab--p">
            Easy and affordable courier services to deliver your package in
            record time without the extra admin
          </div>
        </div>
        <div className="service--con">
          <div className="service--tab--pic">
            <img className="service--pic" src={shuttle} />
          </div>
          <div className="service--tab--heading"> SHUTTLE</div>
          <div className="service--tab--p">
            Shuttle services for small groups who need transportation to the
            same area are alson accommodated
          </div>
        </div>
      </div>
      {/* -- */}
    </section>
  );
}
