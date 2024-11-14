import React, { useState } from "react";
import "./Footer.css";
import { AppWrap, MotionWrap } from "../../Wrapper";
import { client } from "../../Client";
import { images } from "../../constants";

const Footer = () => {
  return (
    <>
      <h6 className="head-text">Take A Coffee & Chat with me</h6>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="" />
          <a href="mailto:sadiqminhas87@gmail.com">sadiqminhas87@gmail.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="" />
          <a href="tel:+9203021478984">03021478984</a>
        </div>
      </div>

      <form action="https://formspree.io/f/xqkopold" method="POST">
        <div className="app__flex">
          <input type="text" name="name" placeholder="Your Name" />
        </div>
        <div className="app__flex">
          <input type="email" name="email" placeholder="your Email" />
        </div>

        <div>
          <textarea name="message"></textarea>
        </div>

        <button type="submit" className="p-text">
          Send Message
        </button>
      </form>
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "Contact",
  "app__whitebg"
);
