import React from "react";
import { cardone } from "../assets";

const CardOne = () => {
  return (
    <div className="p-[5rem] pt-[7rem] sm:flex justify-evenly">
      <div className=" flex-col items-start">
        <h1 className="md:text-[5.5em] text-[3em] items-center text-black  font-Montserrat font-black leading-tight ">
          Awesome
        </h1>
        <h1 className="md:text-[5.5em] text-[3em] items-center text-black font-Montserrat font-black leading-tight pl-8 ml-8">
          Countries
        </h1>

        <div className=" flex justify-between items-center pt-8">
          <div className=" flex-col items-center">
            <h1 className="md:text-[4.5em] text-[2em] text-center text-black  font-Montserrat font-black leading-tight ">
              87+
            </h1>
            <p className=" text-center"> Countries</p>
          </div>
          <div className=" flex-col items-center pl-6">
            <h1 className="md:text-[4.5em] text-[2em] text-center text-black  font-Montserrat font-black leading-tight ">
              64K+
            </h1>
            <p className=" text-center"> Location </p>
          </div>
          <div className=" flex-col text-center pl-6">
            <h1 className="md:text-[4.5em] text-[2em] items-center text-black  font-Montserrat font-black leading-tight ">
              728+
            </h1>
            <p className=" text-center"> Travelers</p>
          </div>
        </div>
      </div>

      <div className="  md:mt-0 mt-6">
        <img src={cardone} />
      </div>
    </div>
  );
};

export default CardOne;
