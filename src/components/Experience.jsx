import React from 'react'
import Html from '../assests/html.png'
import Css from "../assests/css.png"
import Javascript from '../assests/javascript.png'
import ReactImage from "../assests/react.png"
import Tailwind from '../assests/tailwind.png'
import Next from '../assests/nextjs.png'
import NodeImage from '../assests/node.png'
import Github from '../assests/github.png'

export default function Experience() {

    const techs = [
        {id:1,
            src:Html,
            title:'HTML',
            style:'shadow-orange-500'
        },
        {id:2,
            src:Css,
            title:'CSS',
            style:'shadow-blue-500'
        },
        {id:3,
            src: Javascript,
            title:'Javascript',
            style:'shadow-yellow-500'
        },
        {id:4,
            src:ReactImage,
            title:'React js',
            style:'shadow-orange-500'
        },
        {id:5,
            src:NodeImage,
            title:'Node Js',
            style:'shadow-blue-600'
        },

        {id:6,
            src:Tailwind,
            title:'Tailwind CSS',
            style:'shadow-sky-400'
        },

        {id:7,
            src:Next,
            title:'Next Js',
            style:'shadow-white'
        },
        {id:8,
            src:Github,
            title:'Github',
            style:'shadow-white'
        },
    ]

  return (
    <div name="experience" className='bg-gradient-to-b from-gray-800 to-black w-full h-screen md:flex-row'>
<div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center  w-full text-white'>
    <div className='mt-20'>
        <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
        <p className='py-6'>These are some of the technology I have worked with </p>
    </div>

<div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
    {
        techs.map(({id, src,title, style}) =>(
            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
            <img src={src} alt="html-icon" className='w-20 mx-auto'/>
            <p className='mt-4'>{title}</p>
            </div>
        ))
    }
  
    </div>
</div>
 </div>

  )
}
