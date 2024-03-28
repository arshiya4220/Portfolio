import React, { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'

import {HiCode } from 'react-icons/hi';
import { MdOutlineHome } from "react-icons/md";
import { MdRoundaboutLeft } from "react-icons/md";
import { GiHumanTarget } from "react-icons/gi";
import { FaGraduationCap } from "react-icons/fa";
import { GiProgression } from "react-icons/gi";
import { FaPhone } from "react-icons/fa6";

import {Link} from "react-scroll"

const NavBar = () => {

   const [nav,setNav] = useState(false); 
  const links = [
    {
        id: 1,
        link: "home",
        logo:<MdOutlineHome   className='mx-auto'/>
    },
    {
        id: 2,
        link: "about",
        logo:< MdRoundaboutLeft   className='mx-auto'/>
    },
    {
        id: 3,
        link: "portfolio",
        logo:<GiHumanTarget   className='mx-auto'/>

    },
    {
        id: 4,
        link: "education",
        logo:<FaGraduationCap
        className='mx-auto'/>
    },
    {
        id: 5,
        link: "skills",
        logo:<GiProgression  className='mx-auto' />
    },
    {
        id: 6,
        link: "contact",
        logo:<FaPhone  className='mx-auto'/>
    }
]

  return (
    <div className='flex px-4 z-50 justify-between items-center w-full h-20  bg-gradient-to-t via-[#ab9abe] from-[#897c99f5] to-[#897c99f5] text-black fixed'>
        <div className=''>
            <h1 className='text-5xl flex gap-2 font-signature ml-2'>Arshiya <HiCode size={30}/></h1>
        </div>
        <ul className='md:flex hidden'>

            {links.map(({id ,link,logo}) => (
                  <li key={id} className='px-4  cursor-pointer capitalize font-medium text-gray-800 hover:scale-105 duration-200'>
                   <Link to={link} smooth duration={500}> {logo}{link}</Link>
                  </li>
            ))}

        </ul>
        <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 md:hidden z-10 text-gray-800'>
            {nav ? <FaTimes className='size-30' /> : <FaBars className='size-30' />}
        </div>

        {nav && (
             <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-[#ab9abe] to-[#929292]'>
             {links.map(({id ,link}) => (
                       <li key={id} className='py-6 px-4 cursor-pointer capitalize text-4xl'>
                            <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>{link}</Link>
                       </li>
                 ))}
             </ul>
        )}

       
    </div>
  )
}

export default NavBar