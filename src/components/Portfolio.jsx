import React from 'react'
import Moviesearch from "../assests/portfolio/moviesearch.JPG"
 import Statpreview from "../assests/portfolio/statpreview-frontendmentor.JPG"
 import donnoImage from "../assests/portfolio/donnoImage.JPG"
 import shoeImage from "../assests/portfolio/shoeImage.JPG"


export default function Portfolio() {

  const portfolios = [
    {
      id:1,
      src:Moviesearch,
      demo : "https://paschalmoviesearch.netlify.app/",
      code: "https://github.com/Passyswatz/movie-search-app",
    },
    {
      id:2,
      src:Statpreview,
      demo: "https://passyswatz.github.io/mentor/",
      code: "https://github.com/Passyswatz/mentor"
    },
    {
      id:3,
      src: donnoImage,
      demo: "https://donno.netlify.app/",
      code: "https://github.com/Passyswatz/donnoh-web-app"
    },

    {
      id:4,
      src: shoeImage,
      demo: "https://paschalshoeapp.netlify.app/",
      code: "https://github.com/Passyswatz/shoe-collections"
    }
   
    
  ]

  const handleDemo = ( demo) => {
    window.open(demo, '_blank', 'noopener noreferrer');
  }

  const handleCode = (code) => {
    window.open(code, '_blank', 'noopener noreferrer');
  }

  return (
    <div
      name="portfolio"
      className=" bg-gradient-to-b from-black to-gray-800 w-full md:h-screen text-white md:flex-row" 
    >
      <div className="max-w-screen-lg  p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 mt-40">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src,demo,code }) => (
            <div key={id} className=" shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button  onClick={() => handleDemo(demo)} className=" w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button  onClick={() => handleCode(code)} className="px-6 py-3 w-1/2 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
