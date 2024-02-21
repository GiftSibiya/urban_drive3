/// DEPENDENCY IMPORT ///

import React from "react";

///--///

/// FILE IMPORTS ///

import "./ContactUs.css";

///--///

export default function ContactUs() {
  return (
    <section id="contactUs" className="contactUs--main">
      <div className="contact--desc">
        {/* CONTACT HEADING SECTION */}

        <div className="contact--desc--heading">
          <span className="contact--desc--span">Let's Talk</span>
          <span className="contact--desc--span">
            Let us know if you have any needs we can arrange for
          </span>
        </div>

        {/* --- */}

        {/* CONTACT INFORMATION */}
        <div className="contact--desc--details">
          <span className="contact--details"> info@urbandrive.co.za</span>
          <span> 012 345 6789</span>
        </div>

        {/* --- */}
      </div>

      {/* CONTACT FORM FIELDS */}

      <div className="contact--con">
        <div className="contact--row1">
          <div className="contact--input">
            <p>Name</p>

            <input className="smallInput" placeholder="Enter your Name"></input>
          </div>
          <div className="contact--input">
            <p>Email</p>

            <input
              className="smallInput"
              placeholder="Enter your Email"
            ></input>
          </div>
        </div>
        <div className="contact--row2">
          <div className="contact--input">
            <p>Message</p>

            <textarea
              className="contact--textArea"
              placeholder="Enter your message "
            ></textarea>
          </div>
        </div>
        <div className="contact--send">
          <button className="send--btn">Send</button>
        </div>
      </div>

      {/* --- */}
    </section>
  );
}
