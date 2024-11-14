import React from "react";
import "./About.css";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { AppWrap, MotionWrap } from "../../Wrapper";
import { urlFor, client } from "../../Client";

// const abouts=[
//   {title:"Web Developer" , desc:"I am a good web developer", imgUrl:images.about01},
//   {title:"Web Designer" , desc:"I am a good designer", imgUrl:images.about02},
//   {title:"UI/UX" , desc:"I am  good in UI/UX", imgUrl:images.about03},
//   {title:"Graphic Designer" , desc:"I am good in Graphic Designer", imgUrl:images.about04},
// ]

const About = () => {
  const [abouts, setabouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';
    client.fetch(query).then((data) => setabouts(data));
  }, []);

  return (
    <>
      <h2 className="head-text" style={{ marginTop: "2rem" }}>
        I know that <span>Good Website</span> means <span>Good Business</span>
      </h2>
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            key={about.title + index}
            className="app__profile-item"
          >
            <img src={urlFor(about.imgUrl)} alt="" />
            <h2 className="bold-text">{about.title}</h2>
            <p className="p-text">{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "About",
  "app__whitebg"
);
