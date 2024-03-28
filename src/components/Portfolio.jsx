import React from 'react'
import ShowOff from '../assets/Portfolio/ShowOff.png'
import AppleClone from '../assets/Portfolio/AppleClone.png'
import Portfolioo from '../assets/Portfolio/portfolioo.png'
import GrubblyClone from '../assets/Portfolio/GrubblyClone.png'
import { Link } from 'react-scroll'

const Portfolio = () => {

  const portfolios = [
    {
      id:1,
      src:ShowOff,
      code:'https://github.com/arshiya4220/showoff',
      demo:'https://showofff.netlify.app'
    },
    {
      id:2,
      src:GrubblyClone,
      code:'https://github.com/arshiya4220/grubbly',
      demo:'https://grubbly-clone.netlify.com'
    },
    {
      id:3,
      src:Portfolioo,
      code:'http://github.com/arshiya4220/portfolio',
      demo:'https://arshiya-potfolio.netlify.com'
    },
    {
      id:4,
      src:AppleClone,
      code:'http://github.com/arshiya4220/apple',
      demo:'http://apple-clonnee.netlify.com'
    },
  ] 

  return (
    <div name="portfolio" className='bg-gradient-to-b pt-16 md:py-24 from-[#ab9abe] to-[#929292] w-full h-full'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center h-auto md:h-full w-full'>
        <div className='pb-8'>
          <p className='text-2xl md:text-4xl font-bold inline border-b-4 border-gray-500'>
            Portfolio
          </p>
          <p className='py-6'>
            Checkout some of my work here
          </p>
        </div>
        
        <div  className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-12 sm:px-0'>
        {
          portfolios.map(({id,src,code,demo}) => (
            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
              <img src={src} alt='' className='rounded-md duration-200 hover:scale-105' />
              <div className='flex items-center justify-center'>
               <a className='w-2/3 px-4 py-1 duration-200 my-4 mx-2 hover:scale-105  border-2 border-[#76617e] rounded-md' href={demo}>
               <button  >Demo</button>
               </a>
                <a className='w-2/3 px-4 py-1 duration-200 my-4 mx-2 hover:scale-105  border-2 border-[#76617e] rounded-md' href={code}>
                <button >Code</button>
                </a>
              </div>
            </div>
          ))
        }
       
       </div>
      </div>
    </div>
  )
}

export default Portfolio