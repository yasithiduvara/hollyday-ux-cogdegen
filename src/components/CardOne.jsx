import React, { useEffect, useState } from "react";
import { cardone,cardone1,cardone2,cardone3 } from "../assets";

const CardOne = () => {

  const images = [
   `${cardone}`, 
   `${cardone1}`, 
   `${cardone2}`, 
   `${cardone3}`, 

  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const changeImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const intervalId = setInterval(changeImage, 2000); 

    return () => clearInterval(intervalId);
  }, []);
  
  return (
    <div className="p-[5rem] pt-[7rem] sm:flex justify-evenly " >
      <div className=" flex-col items-start">
        <h1 className="md:text-[5em] text-[3em] items-center text-[#013320]  font-Abril leading-tight ">
          Awesome
        </h1>
        <h1 className="md:text-[5em] text-[3em] items-center text-[#013320] font-Abril  leading-tight pl-8 ml-8">
          Countries
        </h1>

        <div className=" flex justify-between items-center pt-8">
          <div className=" flex-col items-center">
            <h1 className="md:text-[4.5em] text-[2em] text-center text-black  font-Abril leading-tight ">
              87+
            </h1>
            <p className=" text-center font-Montserrat text-[1rem]"> Countries</p>
          </div>
          <div className=" flex-col items-center pl-6">
            <h1 className="md:text-[4.5em] text-[2em] text-center text-black  font-Abril leading-tight ">
              64K+
            </h1>
            <p className=" text-center font-Montserrat text-[1rem]"> Location </p>
          </div>
          <div className=" flex-col text-center pl-6">
            <h1 className="md:text-[4.5em] text-[2em] items-center text-black  font-Abril leading-tight ">
              728+
            </h1>
            <p className=" text-center font-Montserrat text-[1rem]"> Travelers</p>
          </div>
        </div>
      </div>

      <div className="  md:mt-0 mt-6">
        <img  src={images[currentImageIndex]} />
      </div>
    </div>
  );
};

export default CardOne;
