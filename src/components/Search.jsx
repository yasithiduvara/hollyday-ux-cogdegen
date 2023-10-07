import React, { useState } from 'react'

const Search = () => {

    const [location, setLocation] = useState('');
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [guests, setGuests] = useState('');
  
    const handleLocationChange = (e) => {
      setLocation(e.target.value);
    };
  
    const handleCheckInChange = (e) => {
      setCheckIn(e.target.value);
    };
  
    const handleCheckOutChange = (e) => {
      setCheckOut(e.target.value);
    };
  
    const handleGuestsChange = (e) => {
      setGuests(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission here, you can use the form values (location, checkIn, checkOut, guests)
    };


  return (
    <div className="booking__container">
    <form onSubmit={handleSubmit}>
      <div className="form__group">
        <div className="input__group">
          <input type="text" value={location} onChange={handleLocationChange} />
          <label>Location</label>
        </div>
        <p>Where are you going?</p>
      </div>
      <div className="form__group">
        <div className="input__group">
          <input type="text" value={checkIn} onChange={handleCheckInChange} />
          <label>Check In</label>
        </div>
        <p>Add date</p>
      </div>
      <div className="form__group">
        <div className="input__group">
          <input type="text" value={checkOut} onChange={handleCheckOutChange} />
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
      <div className=' bg-blue-950 rounded-full w-10 h-10 ml-10'>
        <p>Hellow</p>
      </div>
    </form>
  </div>
  )
}

export default Search