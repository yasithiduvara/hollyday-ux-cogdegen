import React from 'react'
import { navLinks } from '../constants'
import {Logo_Z} from '../assets'

const Footer = () => {
  return (
    <section className='p-20 bg-indigo-950 '>

       <div className='flex justify-center'>
            <hr className='p-3 text-white w-[10em] h-[2em]'/>
        </div>

    <div className='md:flex-none '>

               <nav className=''>

            <ul className='list-none flex flex-col md:flex-row justify-center items-center flex-1'>

                {navLinks.map((nav,index)=>(
                    <li key={nav.id} className='font-poppins font-normal cursor-pointer text-[19px] mr-[4em] text-gray-400 hover:text-sky-400'>

                        <a href={'#${nav.id}'}>{nav.title}</a>
                            
                    </li>
                ))}

            </ul>

        </nav>

        <div className='flex justify-center p-9'>
        <img src={Logo_Z} className='md:w-[250px] md:h-[32px] w-[100%] h-[100%]'/>
        </div>

    </div>
 

    </section>
  )
}

export default Footer