import React from 'react'
import { FaAnglesRight } from "react-icons/fa";
import heroImage from "../assets/redCoder.jpg";
import {Link} from "react-scroll"
const Home = () => {
  return (
    <div name ="home" className='h-screen w-full bg-gradient-to-b from-[#ab9abe] to-[#929292]'>
        <div className='max-w-screen-lg  mx-auto flex flex-col items-center justify-center md:justify-center md:gap-16 h-full px-4 md:flex-row'>
            <div className='flex  mt-[84px] md:mt-0 flex-col justify-end md:justify-center'>
                <h2 className='text-3xl sm:text-7xl font-[500]'>
                    I'm a Tech Explorer
                </h2>
                <p className=' text-gray-800 max-w-md px-2 py-4'>
                    I am a tech enthusiast who delve into DSA, frontend magic with React Js, Tailwind Css & the versatile world of python.
                    <br></br>
                    I like making fun,interactive things with code.
                    I also talk and write about those things.
                </p>
                <div>
                    <Link to='portfolio' smooth duration={500} className='group  w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-bl from-[#897c99f5] to-[#76617e]'>
                        Portfolio
                        <span className='group-hover:rotate-90 duration-300'>
                            <FaAnglesRight size={25} className='ml-1' />
                        </span>
                    </Link>
                </div>
            </div>
            <div className='mt-8 md:mt-0'>
                <img src={heroImage} alt='portfolio' className='pl-4 md:opacity-55 bg-gradient-to-bl from-[#897c99f5] to-[#76617e] rounded-[50%] border-none mx-auto w-2/3 md:w-full' />
            </div>
        </div>
    </div>
  )
}

export default Home