import React, { useState } from 'react';
import { FaBars, FaTimes} from 'react-icons/fa';
import {Link} from 'react-scroll'

export default function Navbar() {

    const [nav , setNav] = useState(false);

    const closeMenu = () => {
        setNav(false); //close the menu when a link is clicked
    }

    const links = [
        {
            id:1,
            link:'home'
        },
        {
            id:2,
            link:'about'
        },
        {
            id:3,
            link:'portfolio'
        },
        {
            id:4,
            link:'experience'
        },
        {
            id:5,
            link:'contact'
        }
    ]

  return (
    <div  className='flex justify-between items-center w-full h-20 px-4 bg-black text-white fixed'>
        <div >
            <h1 className='text-4xl ml-2'>Paschal O.</h1>
        </div>

        <ul className='hidden md:flex'>

         {links.map(({ id, link }) => (
             <li key={id} 
             className='px-4 cursor-pointer capitalize font-medium 
             text-white hover:scale-105 duration-200'>
             <Link to={link} smooth duration={500} onClick={closeMenu}>{link}</Link>
             </li>
         ))}

        </ul>
      <div onClick={() => setNav (!nav)} className='z-10 cursor-pointer pr-4 text-white md:hidden' >
       {nav ? <FaTimes size={30}/>  : <FaBars size={30}/>}
      </div>

      {nav && (
          <ul className='flex flex-col justify-center items-center 
          absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800
          text-white'>
                {links.map(({ id, link }) => (
                 <li key={id} 
                 className='px-4 cursor-pointer capitalize py-6 
                 text-4xl'>
                  <Link to={link} smooth duration={500} onClick={closeMenu}>{link}</Link>
                 </li>
    
             ))}
    
          </ul>
      )}

    </div>
  )
}
