import React, { useState } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { plate3d, plate4d, reg } from "../assets";
import "./card.css";

const products = [
  { name: "4D Plate", image: plate4d, price: "From £40" },
  { name: "3D Plate", image: plate3d, price: "From £40" },
  { name: "Regular Plate", image: reg, price: "From £15" },
];

const ShowCase = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null); // State to track hovered card index
  const [clickedIndex, setClickedIndex] = useState(null); // State to track clicked card index

  const handleCardHover = (index) => {
    setHoveredIndex(index); // Set hovered card index
  };

  const handleCardClick = (index, e) => {
    // Check if the device's screen width is less than or equal to 768 pixels (mobile device)
    if (window.innerWidth <= 768) {
      e.preventDefault(); // Prevent default navigation behavior only on mobile devices
      setClickedIndex(index); // Set clicked card index
    }
  };

  return (
    <>
      <section>
        <div>
          <motion.div variants={textVariant()}>
            <h2 className={`${styles.sectionHeadText} text-center`}>
              Explore Our Products
            </h2>
          </motion.div>
        </div>
      </section>
      <section className="product-container flex flex-wrap">
        {products.map((product, index) => (
          <motion.div
            key={index}
            className="product-card flex-shrink-0 relative"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 20px rgba(255, 255, 0, 0.5)",
            }}
            onMouseEnter={() => handleCardHover(index)} // Set hoveredIndex on mouse enter
            onMouseLeave={() => handleCardHover(null)} // Reset hoveredIndex on mouse leave
            onClick={(e) => handleCardClick(index, e)} // Set clickedIndex on click
          >
            <a href="#order" className="product-link flex flex-col items-center"> {/* Replace Link with anchor tag */}
              <div
                className="product-image w-full"
                style={{ backgroundImage: `url(${product.image})`, height: '300px' }}
              />
              <motion.div
                className={`product-label ${hoveredIndex === index || clickedIndex === index ? 'block' : 'hidden'}`}
                variants={fadeIn}
                initial="hidden"
                animate={(hoveredIndex === index || clickedIndex === index) ? "visible" : "hidden"}
              >
                <span className="product-name">{product.name}</span>
                <br />
                <span className="product-price">{product.price}</span>
              </motion.div>
            </a>
          </motion.div>
        ))}
      </section>
    </>
  );
};

export default SectionWrapper(ShowCase, "showcase");
