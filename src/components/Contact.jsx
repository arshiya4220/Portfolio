import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='bg-gradient-to-t from-[#ab9abe] to-[#929292] w-full h-full pt-16 md:pt-24 pb-8 '>
    <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center h-full w-full'>
      <div className='pb-8'>
        <p className='text-2xl md:text-4xl font-bold inline border-b-4 border-gray-500'>
          Contact
        </p>
        <p className='py-6 capitalize'>
            submit the form below to keep in touch with me 
        </p>
      </div>
      <div className='flex justify-center items-center'>
        <form action='https://getform.io/f/nbvkvxpa' method='POST' className='flex flex-col gap-1 w-full md:w-1/2'>
          <input 
            type='text'
            name='name'
            placeholder='Enter Your Name'
            className='p-2 bg-transparent placeholder:text-gray-500 border-2 rounded-md focus:outline-none border-gray-500'
          />
          <input 
            type='email'
            name='email'
            placeholder='Enter Your email'
            className=' p-2 bg-transparent placeholder:text-gray-500 border-2 rounded-md focus:outline-none border-gray-500'
          />
          <textarea
            name='message'
            rows='10'
            placeholder='Enter Your Message'
            className=' p-2 bg-transparent placeholder:text-gray-500 border-2 rounded-md focus:outline-none border-gray-500'
          />
          <button className='hover:scale-110 duration-300 mx-auto w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-bl from-[#897c99f5] to-[#76617e]'>
            Let's Talk
          </button>
        </form>
      </div>
      </div>
      </div>
  )
}

export default Contact