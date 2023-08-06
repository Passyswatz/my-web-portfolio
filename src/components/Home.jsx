import React from 'react'
import Myimage from '../assests/resume.jpg'
import {MdKeyboardArrowRight} from 'react-icons/md'

export default function Home() {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800' >
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
          <h2 className='text-4xl sm:text-7xl font-bold text-white'>I'm a Frontend engineer</h2>
          <p className='text-white py-4 max-w-md'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati rerum officiis non fugit autem eveniet illum, earum eum odit voluptates culpa 
            vel cum vitae? Vero adipisci quidem dolor facilis maxime.
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
        <div>
          <img src={Myimage} alt="myimage"
          className='rounded-2xl mx-auto w-2/3 md:w-full'/>
        </div>
      </div>
    </div>
  )
}
