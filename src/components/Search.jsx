import React, { useState } from 'react'
import { search } from '../assets'

const Search = () => {

 


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
        <p>Add date</p>
      </div>
      <div className="form__group">
        <div className="input__group">
          <input type="text" />
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
  </div>
  )
}

export default Search