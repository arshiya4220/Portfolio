import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full  pt-16 md:pt-24 h-full bg-gradient-to-t from-[#ab9abe] to-[#929292]'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8 '>
                <p className='text-2xl md:text-4xl font-bold inline border-b-4 border-gray-500'>
                    About
                </p>
            </div>
            <div>
                <p className='text-base  md:mt-10'>
                Hello! I am driven by a passion for innovation and a thirst for knowledge, constantly seeking to expand my horizons in the dynamic fields of technology.
                In the realm of frontend development, I harness the power of modern tools and frameworks like React.js and Tailwind CSS to craft engaging and intuitive user experiences. From dynamic interfaces to responsive layouts, I strive to create web solutions that delight and inspire.
                My journey with Python and C is a voyage of discovery, where every project is an opportunity to explore new possibilities and push the boundaries of what's possible.
                With a keen interest in Data Structures and Algorithms (DSA), I delve into the intricacies of problem-solving and algorithmic thinking, honing my skills to tackle complex challenges with efficiency and precision.
                </p>
                <br />
                <p className='text-base'>
                At the intersection of DSA, frontend development, and Python, I find my passion and purpose. With each endeavor, I seek to merge theory with practice, creativity with logic, and curiosity with innovation, shaping the future of technology one project at a time.
                Together, let's embark on a journey of exploration and enlightenment.
                Welcome to my world, where curiosity reigns supreme, and every challenge is an opportunity to shine.
                </p>
            </div>
        </div>
    </div>
  )
}

export default About