import React from "react";
import "./Header.css";

import { motion } from "framer-motion";
import { images } from "../../constants";
import { AppWrap } from "../../Wrapper";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => {
  return (
    <div className="app__header app__flex" id="Home">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge ">
          <div className="badge__cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello I am</p>
              <h1 className="head-text"> Siraj</h1>
            </div>
          </div>
          <div className="tag__cmp app__flex">
            <p className="p-text">Webdeveloper</p>
            <p className="p-text">Freelancer</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 1, delayChildren: 1 }}
        className="app_header-img"
      >
        <img src={images.profileIMg} alt="" />
        <motion.img
          src={images.circle}
          alt=""
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="overly"
        />
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.javascript, images.react, images.css].map((circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, "Home");
