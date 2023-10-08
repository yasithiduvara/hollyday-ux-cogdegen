import React from 'react'
import { navLinks } from '../constants'
import {Logo_Z, facebook, instagram, linkedin, twitter} from '../assets'

const Footer = () => {
  return (
    <section className='p-20 bg-[#114820] '>

       <div className='flex justify-center'>
            <hr className='p-3 text-white w-[60em] h-[2em]'/>
        </div>

    <div className='md:flex-none '>

               <nav className=''>

            <ul className='list-none flex flex-col md:flex-row justify-center items-center flex-1'>

                {navLinks.map((nav,index)=>(
                    <li key={nav.id} className='font-poppins font-normal cursor-pointer text-[19px] sm:mr-[4em] text-white'>

                        <a href={'#${nav.id}'}>{nav.title}</a>
                            
                    </li>
                ))}

            </ul>

        </nav>

  

        <div className='flex justify-center pt-3'>

       <a href=""> <img src={facebook} className='w-6 sm:m-9 m-3' alt="" /></a> 
         <a href=""><img src={twitter} className='w-6 sm:m-9 m-3' alt="" /></a>
         <a href=""><img src={instagram} className='w-6 sm:m-9 m-3' alt="" /></a>
        <a href=""><img src={linkedin} className='w-6 sm:m-9 m-3' alt="" /></a> 
   
        </div>
        <a href=""> 
        <div className='flex justify-center pt-8'>
      <img src={Logo_Z} className='md:w-[250px] md:h-[32px] w-[50%]'/>
        </div>
        </a>
    </div>
 

    </section>
  )
}

export default Footer