import { useState, useEffect } from 'react';
import Typed from 'typed.js';
import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  
  useEffect(() => {
    // Configuration for the Typed instance
    const options2 = {
      strings: ["I am an 2024 undergrad in computer science engineering who has solved 500+ questions on LeetCode, GeeksforGeeks and more to improve my data structures and algorithms. I am skilled JavaScript, C/C++ and expertise in frameworks like React, Node.js. I am a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems also As a hobby, I teach C/C++ programming. Currently looking for software development engineering internship (SDE) / web dev internship/ Full-Time opportunities."],
      typeSpeed: 2,
      loop: false,
    };

    // Target the element with the "typing" class
    const targetElements = document.querySelector(".typing1");

    if (targetElements) {
      // Create a new Typed instance
      const typed1 = new Typed(targetElements, options2);

      // Cleanup on unmount
      return () => {
        typed1.destroy();
      };
    }
  }, []);


  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 ml-1 text-secondary text-base lg:text-lg max-w-3xl leading-normal lg:leading-[30px] text-justify"
      >I am an 2024 undergrad in computer science engineering who has solved 500+ questions on LeetCode, GeeksforGeeks and more to improve my data structures and algorithms. I am skilled JavaScript, C/C++ and expertise in frameworks like React, Node.js. I am a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems also As a hobby, I teach C/C++ programming. Currently looking for software development engineering internship (SDE) / web dev internship/ Full-Time opportunities.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
