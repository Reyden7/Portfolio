import React, { useState, useEffect } from "react";
import Navbare from '../navbar';
import Profile from '../profile';
import CV from '../moncv';
import Arrow from '../arrow';
import Projets from '../mesprojet';
import Homeanime from '../homeanime';
import '../scrollbare.css';

export default function Home() {

  

  return (
    <div className="content">
      
      <div className=' flex h-screen'>
        <div className=' lg:flex-1 sm:hidden lg:block' >
        <Profile/>
       
        
        </div>

        <div className='lg:flex-1 lg:-ml-96 sm:-ml-52 sm:text-center lg:text-left sm:align-middle'>
          
          <div><h1 className='text-gray-50 text-4xl font-mono mt-10 pl-32 subpixel-antialiased tracking-widest'>Je suis</h1></div>
          <div><h1 className='text-gray-50 text-5xl font-mono mt-10 pl-64 subpixel-antialiased'>Quentin c.</h1></div>
          <div><h1 className=' text-red-600 text-xl font-serif mt-10 pl-80 subpixel-antialiased tracking-widest'>Dev front et back end</h1></div>
          <div className=' lg:mt-12 lg:w-5/6 lg:-ml-24 sm:mt-0 sm:w-5/6 sm:text-center  sm:ml-40 sm:p-16 sm:ju'>
          <p className='text-gray-50 text-xl font-mono mt-10 lg:pl-20  subpixel-antialiased lg:w-auto sm:text-center  lg:ml-0  sm:w-auto sm:mr-0 sm:justify-center '>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
           Nam eget sapien sed quam maximus feugiat at elementum felis. Aenean laoreet sapien</p>
           <p className='text-gray-50 text-xl font-mono mt-10 lg:pl-72   sm:w-auto  subpixel-antialiased w-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
           Nam eget sapien sed quam maximus feugiat at elementum felis. Aenean laoreet sapien</p>
            <div className='lg:mt-16 text-right sm:mt-16 lg:text-right sm:text-center ' ><CV/></div>     
          </div>
        </div>
      </div>
      <div className='lg:-mt-80 lg:mb-80 sm:-mt-64 sm:mb-80'><Arrow/></div>
       <div className='relative'><Navbare/></div>
       <div className="w-full items-center justify-center">
          <div className="lg:ml-40 sm:mt-16  lg:ml-0 "><Projets/></div>
       </div>
      
       
    </div>
    
  )
}
