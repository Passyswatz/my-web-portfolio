import React from 'react'

export default function About() {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div  className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-800'>About</p>
            </div>
            <p className='text-xl mt-20 '>Lorem ipsum dolor sit amet consectetur
                 adipisicing elit. Atque mollitia, quasi aliquam beatae eligendi sunt 
                 et dolore laboriosam commodi quaerat. Tenetur, amet velit? Est magnam corporis repudiandae soluta dolorem possimus odit fugiat quas et dolorum id dolore nisi aperiam suscipit atque aspernatur autem 
                commodi explicabo eum, pariatur rem in laudantium.</p>
                <br/>

                <p className='text-xl'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                     Blanditiis expedita illo corporis, cupiditate odit culpa corrupti deserunt facilis laborum a in! Sapiente ducimus atque obcaecati minus adipisci nesciunt nulla quo, architecto, accusantium perspiciatis eaque. Cumque consequuntur aperiam nisi aut vero dolor, tenetur voluptatum unde, 
                    dolorum, doloremque officiis magni est rerum.
                </p>
        </div>

    </div>
  )
}
