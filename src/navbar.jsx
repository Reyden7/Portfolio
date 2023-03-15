import React from 'react';
import './navbar.css';
import Projets from './img/projets.png';
import Competences from './img/competences.png';
import Hobbie from './img/hobbies.png';
import Contact from './img/contact_.png';



function Navbare(){

    return(
        <div  data-aos="fade-up" className=' lg:mt-40'>
            <nav  className=' flex items-center justify-center sm:h-20 mx-auto md:w-1/6 xl:w-1/6  lg:w-1/6 sm:mt-5  '>
                
                <div className=' absolute shadow-2xl nav flex-1  items-center h-20  fixed flex justify-center sm:h-20 md:h-20 lg:h-20 sm:mt-0  sm:w-full md:w-auto lg:w-auto xl:w-auto sm:pb-1'>
                    <div className='sm:w-13' tabIndex="0"> 
                    <a href='./projets' className=' sm:w-6' data-feather="Projets"><img className= 'sm:w-13 md:w-24' src={Projets}></img></a>
                    </div>
                    <div className='sm:w-13' tabIndex="0"> 
                    <a href='./competences' className='' data-feather="Projets"><img className='sm:w-13 md:w-24 md:p-0' src={Competences}></img></a>
                    </div>
                    <div className='sm:w-13' tabIndex="0"> 
                    <a  href='./hobbie'className='' data-feather="Projets"><img className=' sm:w-13 md:w-24' src={Hobbie}></img></a>
                    </div>
                    <div className='sm:w-13' tabIndex="0"> 
                    <a href='./contact' className=''  data-feather="Projets"><img className=' sm:w-13 md:w-24' src={Contact}></img></a>
                    </div>
                </div>
                
            </nav>
        </div>
        

    )
}
export default Navbare;