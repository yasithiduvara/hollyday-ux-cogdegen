import React from "react";
import { Logo_Z, close, menu } from "../assets";
import { navLinks } from "../constants";
import { useState, useEffect } from "react";
import { motion as m } from "framer-motion";
import { navVariants } from "../utils/motion";

const Nav = () => {
  const [toggle, setToggle] = useState(false);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const togglePopup = () => {
    setPopupOpen(!isPopupOpen);
  };

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    // Add the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <m.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={` ${
        scrolling ? "scroll-background" : ""
      }  w-full fixed flex p-5 justify-between items-center navbar z-10 ease-in-0.5 translate`}
    >
      <img src={Logo_Z} className="md:w-[250px] md:h-[32px] w-[200px]" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[17px] mr-12 text-white hover:text-sky-400`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
        <li className="" onClick={() => togglePopup()}>
          Sign IN
        </li>
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          className="w-[28px] h-[28px] object-contain sm:hidden"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className=" list-none flex flex-col justify-end ithems-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cuesor-pointer text-[16px] text-white mr-10 p-10`}
              >
                <a href={`#${nav.id}`} onClick={() => setToggle()}>
                  {nav.title}
                  Sign
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {isPopupOpen && (
        <div
          className="fixed inset-0 bg-[black] bg-opacity-50 flex justify-center items-center "
          onClick={togglePopup}
        >
          <h1>ushuifh hkkki</h1>
        </div>
      )}
    </m.nav>
  );
};

export default Nav;
