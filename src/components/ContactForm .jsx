import React from 'react';

const ContactForm = () => {
  return (
    <div className="bg-white w-full p-6 shadow-lg rounded-lg " id='contact'>
      <h2 className="md:text-[4em] text-[2em] items-center mb-4 font-Abril text-[#013320] leading-tight text-center">Contact Us</h2>
      <form className='p-2'>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter your phone number"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block text-gray-700 font-semibold mb-2">
            Address
          </label>
          <textarea
            id="address"
            name="address"
            className="w-full p-2 border border-gray-300 rounded-md h-20 resize-none"
            placeholder="Enter your address"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-green-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
