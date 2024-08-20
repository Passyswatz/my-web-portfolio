import React from 'react'
import Myimage from '../assests/resume.jpg'
import {MdKeyboardArrowRight} from 'react-icons/md'

export default function Home() {
  return (
    
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 md:flex-row ' >
      <div className='max-w-screen-lg mx-auto flex flex-col  items-center justify-center  px-4 md:flex-row '>
        <div className='mt-40 flex flex-col justify-center h-full '>
          <h2 className=' text-4xl  sm:text-5xl font-bold text-white  '> I'm Paschal Og - your dedicated Frontend Developer</h2>
          <p className='text-white py-4 max-w-md'>My expertise lies in crafting cutting-edge mobile applications and websites that set trends and captivate users. I thrive on collaborative development, 
          joining forces with fellow creators to deliver top-tier mobile and web experiences. Explore my portfolio to witness my latest endeavors. Operating remotely from UTC−1 to UTC+8.
           Reach me on WhatsApp at +234 909 251 3945 or connect via email at passyswatz@gmail.com.
Let's build something remarkable together.
          </p>
         <div>
         <button className='group text-white w-fit px-6 py-3 my-2
         flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
            portfolio
            <span className='group-hover:rotate-90 duration-300'>
              <MdKeyboardArrowRight size={25} className='ml-1'/>
            </span>
          </button>
         </div>
        </div>
        <div >
          <img src={Myimage} alt="myimage"
          className='rounded-2xl mt-20  mx-auto w-2/3 md:w-full'/>
        </div>
      </div>
    </div>
  )
}
