// import React from 'react'

import React from "react";

// import contactus from "../public/assets/contact-us.jpg";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const Contact = () => {


  const links = [

    {
        id:1,
        child: (
            <>
            LinkedIn <FaLinkedin size={30}/>
            </>
        ),
        href: "https://www.linkedin.com/in/paschal-ogbu-b0940b214/",
        style: "rounded-tr-md"
   
      },

    {
        id:2,
        child: (
            <>
            Github <FaGithub size={30}/>
            </>
        ),
        href: "https://github.com/Passyswatz",
       
    },
    {
      id:3,
      child: (
          <>
          Twitter <FaTwitter size={30}/>
          </>
      ),
      href: "https://twitter.com/OgPaschal",
     
  },

    
    // {
    //     id:4,
    //     child: (
    //         <>
    //         Resume  <BsFillPersonLinesFill size={30}/>
    //         </>
    //     ),
    //     href: "/resume/pdf",
    //     style: "rounded-br-md",
    //     download:true,
    // },
];
  return (
    <div id="contact" className="w-full bg-gradient-to-b from-black to-gray-800">
      <div className="max-w-screen-xl mx-auto p-4 text-center md:text-left">
      <div className=' mt-20'>
      <p  className=' text-4xl font-bold inline border-b-4 text-white  border-gray-500'>Contact</p>  
</div>
        <div className="flex flex-col md:flex-row gap-8 shadow-xl  bg-gradient-to-b from-black to-gray-800 mt-4">
          <div className="w-full md:w-1/2 h-full rounded-xl p-4">
             {/* <Image
              src={contactus}
              alt="man with laptop"
              className="rounded-xl"
            />  */}
            <p className="pt-2 pb-8 text-white">
              I am open to talk regarding freelancing or full-time
              opportunities. Fill free to contact me using your preferred
              medium.
            </p>

            <div className="grid grid-cols-2 mx-auto w-4/5 gap-10">

             
              {links.map(({id,child, href}) => (
                <div 
                key={id} className="flex items-center justify-center rounded-full  bg-white shadow-md shadow-blue-500 hover:scale-105 duration-200 p-3 cursor-pointer">
                     <a
                  href={href}
                  className='flex justify-between items-center w-full'
                  // download={download}
                  target='_blank'
                  rel="noreferrer"
                >
                  {child}
                </a>
              </div>))}
           
            </div>
          </div>

          <div name="contact" className='w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white md:flex-row'>         <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>            
           <div className='pb-8'>                
                          
            <p className='py-6  text-center'>Submit the form below to get in touch with me</p>          
               </div>           
                 <div className='flex justify-center items-center'>                 
               <form action='https://getform.io/f/ba2af7df-a1a6-4753-bf19-13f875d061ac' method='POST' className=' flex flex-col w-full md:w-1/2'>                   
                 <input type='text' name='name' placeholder=' Enter your name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>                  
                    <input type='text' name='email' placeholder=' Enter your email' className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
               <textarea name='message'placeholder='enter your message' rows="10" className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea> 
                
                <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Lets talk</button>
                </form>             </div>
        </div>
    </div>

       </div>
       </div>
       </div>
  );
};

export default Contact;