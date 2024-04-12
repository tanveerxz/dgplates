import React from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from '../utils/motion';
import "./nav.css";

const Order = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>ORDER YOUR CAR PLATES NOW!</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>BUY NOW</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className={`mt-4 mb-2 text-secondary text-[17px] max-w-3xl leading-[30px] text-center`}
      >
        Click on the link below to order via WhatsApp
      </motion.p>

      {/* Button for Pre Order */}
      <motion.a
        href="https://wa.link/0dhwxo"
        target="_blank"
        rel="noopener noreferrer"
        variants={fadeIn("", "", 0.2, 1)}
        className={`button mb-4`}
      >
        Get Your New Plates
      </motion.a>
    </div>
  );
};

export default SectionWrapper(Order, "order");
