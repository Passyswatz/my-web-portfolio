import React from 'react'

export default function About() {
  return (
    <div name="about" className=' md:w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white md:flex-row'>
        <div  className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8  '>
                <p className='text-4xl font-bold inline border-b-4 border-gray-800'>About</p>
            </div>
            <p className='text-xl mt-20 '>     Hello there! I'm a passionate front-end developer who thrives on crafting digital experiences that come to life on the web and mobile platforms. My mission is to consistently create pixel-perfect products that not only dazzle the eye but
             also provide exceptional user experiences through intuitive user interfaces.</p>
                <br/>

                <p className='text-xl'>
                My toolkit is powered by the magic of HTML, CSS, and JavaScript, along with the dynamic capabilities of React.js and Next.js
                and the streamlined efficiency of Tailwind CSS. I'm not just limited to the front-end; 
                I have basic skill's in server-side programming using Node.js.
                </p>

                <p className='text-xl'>
                Effective communication is at the heart of what I do. Fluent in English, I pride myself on my ability to collaborate seamlessly and articulate complex ideas clearly.
                 Let's work together to turn your digital dreams into stunning realities!
                </p>
        </div>

    </div>
  )
}
