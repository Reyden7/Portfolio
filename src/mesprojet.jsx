import React from 'react';
import { Link } from 'react-router-dom'; // Importer le composant Link de React Router
import Projets from './projets'
import EtabsLogo from './img/logoetabstercer.png'
import ReviLogo from './img/logoerevi.png'
import DualscreenLogo from './img/logodualscreen.png'
import A_venirLogo from './img/A_venir.png'
import EtabsLink from './components/etabs'

function mesprojets(){
    
    /*const images = [
        'https://source.unsplash.com/random/400x400',
        'https://source.unsplash.com/random/401x401',
        'https://source.unsplash.com/random/402x402',
        'https://source.unsplash.com/random/403x403'
    ];

    const getRandomImage = () => {
        const index = Math.floor(Math.random() * images.length);
        return images[index];
    };*/

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      };
   
    return(
        <div className=''>
        
            <div id="projets-container"  className="flex sm:flex-row sm:flex-wrap  lg:mt-72 sm:items-center sm:justify-between  ">
                <div className='w-full sm:mb-72 md:w-1/3 lg:w-1/4 p-2' >
                    {EtabsLink}
                    <Link to="/etabs" onClick={scrollToTop}>
                    <Projets             
                        imageSrc={EtabsLogo} 
                        title="Etabs"
                        description="Le gestionaire de tablature pour les guitaristes !"/>
                    </Link>
                </div>
                <div className='w-full sm:mb-72 md:w-1/3 lg:w-1/4 p-2'>
                    <Link to="/revi" onClick={scrollToTop}>
                    <Projets             
                        imageSrc={ReviLogo}
                        title="The Revi Network"
                        description="Le nouveau site de la juniore agence pour le master REVI"/>
                    </Link>
                </div>
                <div className='w-full sm:mb-72 md:w-1/3 lg:w-1/4 p-2'>
                    <Link to="/vertiscreen" onClick={scrollToTop}>
                    <Projets             
                        imageSrc={DualscreenLogo}
                        title="Vertiscreen"
                        description="Un système ingénieux de double écran pour ordinateur portable"/>
                    </Link>
                </div>
                <div className='w-full sm:mb-72 md:w-1/3 lg:w-1/4 p-2'>
                    <Link to="/a-venir" onClick={scrollToTop}>
                    <Projets             
                        imageSrc={A_venirLogo}
                        title="A venir"
                        description="A venir ..."/>
                    </Link>
                </div>
                    
            </div> 
            
                
            
        </div>
           

        


    )
}
export default mesprojets;