import "./Testimonils.css";
import React, { useEffect, useState } from "react";
import { urlFor, client } from "../../Client";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { AppWrap, MotionWrap } from "../../Wrapper";
import { motion } from "framer-motion";

const Testimonials = () => {
  const [Brands, setBrands] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setcurrentIndex] = useState(0);

  const handleClicked = (index) => {
    setcurrentIndex(index);
  };

  useEffect(() => {
    const query = '*[_type == "testimonials"]';
    const brandsQuery = '*[_type == "brands"]';

    client.fetch(query).then((data) => {
      setTestimonials(data);
    });

    client.fetch(brandsQuery).then((data) => {
      setBrands(data);
    });
  }, []);
  const test = testimonials[currentIndex];
  return (
    <>
      {testimonials.length && (
        <>
          <div className="center">
            <div className="app__testimonial-item ">
              <img src={urlFor(test.imgurl)} />
              <div className="app__testimonial-content">
                <div>
                  <p className="p-text">{test.feedback}</p>
                </div>
                <div>
                  <h4 className="bold-text">{test.name}</h4>
                  <h5 className="p-text">{test.company}</h5>
                </div>
              </div>
            </div>
          </div>

          <div className="app__testimonils-btns app__flex">
            <div
              className="app__flex"
              onClick={() =>
                handleClicked(
                  currentIndex === 0
                    ? testimonials.length - 1
                    : currentIndex - 1
                )
              }
            >
              <HiChevronLeft />
            </div>
            <div
              className="app__flex"
              onClick={() =>
                handleClicked(
                  currentIndex === testimonials.length - 1
                    ? 0
                    : currentIndex + 1
                )
              }
            >
              <HiChevronRight />
            </div>
          </div>
        </>
      )}

      <div className="app__testimonials-brands app__flex">
        {Brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: "tween" }}
            key={brand._id}
          >
            <img src={urlFor(brand.imgUrl)} alt="" />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonials, "app__testimonials"),
  "Testimonials",
  "app__primarybg"
);
