import React from 'react';
import { FaGithub,FaLinkedin } from 'react-icons/fa6';
import {HiOutlineMail} from 'react-icons/hi';
import { BsPersonLinesFill} from 'react-icons/bs';

const socioLinks = () => {

const links = [
  {
    id:1,
    child: (
      <>
       LinkedIn <FaLinkedin size={30}/>
      </>
    ),
    href:'https://linkedin.com/in/arshiya--?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    style:'rounded-tr-md'
  },
  {
    id:2,
    child: (
      <>
       GitHub <FaGithub size={30}/>
      </>
    ),
    href:'https://github.com/arshiya4220',
  },
  {
    id:3,
    child: (
      <>
       Mail <HiOutlineMail size={30}/>
      </>
    ),
    href:'mailto:arshiyaarshu775@gmail.com',
  },
  {
    id:4,
    child: (
      <>
       Resume <BsPersonLinesFill size={30}/>
      </>
    ),
    href:'./Arshiya.pdf',
    style:'rounded-br-md',
    downloaded:true
  }
]

  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed '>
       <ul>
        {links.map(({id,child,href,style,downloaded}) => (
           <li key={id} className={'flex justify-between items-center px-4 bg-gradient-to-bl from-[#897c99f5] to-[#76617e] w-40 h-14 ml-[-100px] hover:rounded-md duration-300 hover:ml-[-10px] bg-gray-500' + "" + {style}}>
           <a
              href={href}
              className='flex justify-between items-center w-full '
              download={downloaded}
              target='blank'
           >
            {child}
           </a>
         </li>
        ))}
       
       </ul>
    </div>
  )
}

export default socioLinks