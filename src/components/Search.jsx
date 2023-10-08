import React, { useState } from 'react'
import { search } from '../assets'
import Calander from './Calander'


const Search = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const togglePopup = () => {
    setPopupOpen(!isPopupOpen);
  };
 


  return (
    <div className="booking__container ">
    <form  className=' font-Montserrat text-green-900 font-[400]'>
      <div className="form__group">
        <div className="input__group">
          <input type="text" />
          <label>Location</label>
        </div>
        <p>Where are you going?</p>
      </div>
      <div className="form__group">
        <div className="input__group">
          <input type="text" />
          <label>Check In</label>
        </div>
        <p onClick={togglePopup}>Add date</p>
        
      </div>
      <div className="form__group">
        <div className="input__group">
          <input type="text"  />
          <label>Check Out</label>
        </div>
        <p>Add date</p>
      </div>
      {/* <div className="form__group">
        <div className="input__group">
          <input type="text" value={guests} onChange={handleGuestsChange} />
          <label>Guests</label>
        </div>
        <p>Add guests</p>
      </div> */}
      <div className=' bg-green-900 w-10 h-10 rounded-full cursor-pointer'>
        <img src={search} className='flex justify-center items-center w-5 ml-3 mt-3' alt="" />
      </div>
      
    </form>
    {/* {isPopupOpen && (
        <div className="inset-0 bg-opacity-80 flex justify-center items-center ">
           <div
            className=" absolute md:right-[35rem] top-[9rem] text-white"
            onClick={togglePopup}
          >
            <img src={close} className=" cursor-pointer" alt="" />
          </div>
          <Calander />
        </div>
      )} */}
  
  </div>
  )
}

export default Search