import React from 'react'
// import { Warcarft,Wonder_Women,BatGirl,Thor } from '../assets'
import { galary } from '../constants'

const Brows = () => {
  return (
    <section className=" bg-indigo-950 py-10 " id='browse'>

      <h1 
      className='font-Montserrat font-black leading-tight  text-[70px] text-white w-full text-center'>
            Top Picks for You
      </h1>

    <div className="container flex justify-between items-center md:flex-row flex-col mx-auto p-10">
     {galary.map((photos,index) =>(

      <div className='relative'>
           <img src={photos.image} className="w-full p-10 rounded-[60px] drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]" />
      
            <h3 className="absolute bottom-0 left-0 right-0 text-gray-400 text-center py-2 font-Montserrat font-thin">{photos.title}</h3>

      </div>
   
     ))}
    </div>
  </section>
  )
}

export default Brows