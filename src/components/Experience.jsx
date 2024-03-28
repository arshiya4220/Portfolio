import React from 'react'
import CssLogo from '../assets/Skills/CsssLogo.png';
import HtmlLogo from '../assets/Skills/HtmlLogo.png';
import JsLogo from '../assets/Skills/JsLogo.webp';
import ReactLogo from '../assets/Skills/ReactLogo.jpeg';
import CLogo from '../assets/Skills/clogo-1.webp';
import PythonLogo from '../assets/Skills/PythonLogo.jpeg';
import TailLogo from '../assets/Skills/TailLogo.jpeg';
import ResponLogo from '../assets/Skills/ResponLogo.png';
import Git from '../assets/Skills/Git.png'

const Experience = () => {

  const skills = [
    {
      id:1,
      src:HtmlLogo,
      name:'Html',
      style:'shadow-orange-400'
    },
    {
      id:2,
      src:CssLogo,
      name:'CSS',
      style:'shadow-indigo-300'
    },
    {
      id:3,
      src:TailLogo,
      name:'Tailwind',
      style:'shadow-cyan-300'
    },
    {
      id:4,
      src:JsLogo,
      name:'Javascript',
      style:'shadow-yellow-300'
    },
    {
      id:5,
      src:ReactLogo,
      name:'React Js',
      style:'shadow-blue-200'
    },
    {
      id:6,
      src:PythonLogo,
      name:'Python',
      style:'shadow-yellow-300'
    },
    {
      id:7,
      src:CLogo,
      name:'C',
      style:'shadow-indigo-950'
    },
    {
      id:8,
      src:ResponLogo,
      name:'Responsiv',
      style:'shadow-slate-950'
    },
    {
      id:9,
      src:Git,
      name:'GitHub',
      style:'shadow-gray-950'
    }
  ] 

  return (
    <div name="skills" className='pt-16 md:pt-24 bg-gradient-to-b from-[#ab9abe] to-[#929292] w-full  h-full'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center  h-full  w-full'>
      <div className=''>
          <p className='text-[#313035] text-md md:text-xl'>
            Skills and Tools
          </p>     
           <p className='text-2xl md:text-4xl font-bold inline border-b-4 border-gray-500'>
            My Toolbox & Things I Can Do
          </p>
          <p className='py-6'>
            The skills,tools and technologies I knew
          </p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
          {skills.map(({id,src,name,style}) => (
            <div
             key={id}
             className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
            <img src={src} alt='' className='w-20 mx-auto'/>
            <p className='mt-4'>{name}</p>
          </div>
          ))}
          
        </div>
        {/* <div>
        <p>Currently Working on:</p>
        <p>Improving my skills in, and understanding of --- .Also having fun with #100DaysOfCode building and animating things via CSS.</p>
      </div> */}
      </div>
    </div>
  )
}

export default Experience