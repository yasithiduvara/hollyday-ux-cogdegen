import React from "react";
import { useState, useEffect } from "react";
import {  hotelbg } from "../assets";
import styles from "../styles";
import { motion as m } from "framer-motion";
import { slideIn, textVariant, textContainer } from "../utils/motion";

const Hero = () => {
  const [isSmall, setIsSmall] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmall(window.innerWidth < 640);
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative h-screen" id="home">
      {/* <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 `}>
            <div className= 'absolute z-[1] w-[40%] h-[35%] top-0 pink__gradient'/>
            <div className='absolute z-[1] w-[50%] h-[50%] top-0 pink__gradien bottom-20 blue__gradient'/>
      </div> */}

      <div className="absolute w-[50%] inset-0 bg-blue-gradient" />

      <img
        src={isSmall ? hotelbg : hotelbg}
        className="absolute inset-0 md:h-full md:w-full md:object-cover object-cover h-full w-full"
      />

      <div className="absolute inset-0 flex items-center justify-center sm:p-12 sm:mt-12 sm:mb-0 mb-12">
        <div
          variants={textContainer}
          initial="hidden"
          whileInView="show"
          className="text-center"
        >
          <h1 className="md:text-[5.5em] text-[3em] items-center text-white mb-4 font-Abril  leading-tight font-[500]">
            Discover Your Dream <br /> Gataway
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
