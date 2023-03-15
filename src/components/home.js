import React, { useState, useEffect } from "react";
import Navbare from '../navbar';
import Profile from '../profile';
import CV from '../moncv';
import Arrow from '../arrow';
import Projets from '../mesprojet';
import Homeanime from '../homeanime';

export default function Home() {

  const [backgroundColor, setBackgroundColor] = useState('#2A2430');

  return (
    <div style={{backgroundColor}}><Homeanime setBackgroundColor={setBackgroundColor} />
      <div className=' flex h-screen'>
        <div className=' flex-1 ' >
        <Profile/>

        </div>

        <div className='flex-1 -ml-96'>
          
          <div><h1 className='text-gray-50 text-4xl font-mono mt-10 pl-32 subpixel-antialiased tracking-widest'>Je suis</h1></div>
          <div><h1 className='text-gray-50 text-5xl font-mono mt-10 pl-64 subpixel-antialiased'>Quentin c.</h1></div>
          <div><h1 className=' text-red-600 text-xl font-serif mt-10 pl-80 subpixel-antialiased tracking-widest'>Dev front et back end</h1></div>
          <div className=' mt-32 w-3/4'>
          <p className='text-gray-50 text-xl font-mono mt-10 pl-20 subpixel-antialiased w-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
           Nam eget sapien sed quam maximus feugiat at elementum felis. Aenean laoreet sapien</p>
           <p className='text-gray-50 text-xl font-mono mt-10 pl-32 subpixel-antialiased w-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
           Nam eget sapien sed quam maximus feugiat at elementum felis. Aenean laoreet sapien</p>
            <div className='mt-16 text-right' ><CV/></div>     
          </div>
        </div>
      </div>
      <div className='-mt-80 mb-80'><Arrow/></div>
       <div className='relative'><Navbare/></div>
       <div><Projets/></div>
       
    </div>
    
  )
}
