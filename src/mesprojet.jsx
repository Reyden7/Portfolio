import React from 'react';
import { Link } from 'react-router-dom'; // Importer le composant Link de React Router
import Projets from './projets'
import logotest from './img/Avatar.png'
import TRNLogo from './img/hobbies.png'
import VertiscreenLogo from './img/projets.png'
import asuivreLogo from './img/contact_.png'
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
        <div>
        
            <div id="projets-container"  className=' lg:mt-64 lg:ml-20 lg:flex'>
                <div className=' lg:flex-1 lg:ml-24 lg:mb-36  lg:mt-16 ' >
                    {EtabsLink}
                    <Link to="/etabs" onClick={scrollToTop}>
                    <Projets             
                        imageSrc={EtabsLogo} 
                        title="Etabs"
                        description="Le gestionaire de tablature pour les guitaristes !"/>
                    </Link>
                </div>
                <div className='lg:flex-1 lg:ml-24 lg:mb-36  lg:-mt-16'>
                    <Link to="/revi" onClick={scrollToTop}>
                    <Projets             
                        imageSrc={ReviLogo}
                        title="The Revi Network"
                        description="Le nouveau site de la juniore agence pour le master REVI"/>
                    </Link>
                </div>
                <div className=' lg:flex-1 lg:ml-24 lg:mb-36  lg:mt-16'>
                    <Link to="/vertiscreen" onClick={scrollToTop}>
                    <Projets             
                        imageSrc={DualscreenLogo}
                        title="Vertiscreen"
                        description="Un système ingénieux de double écran pour ordinateur portable"/>
                    </Link>
                </div>
                <div className=' lg:flex-1 lg:ml-24 lg:mb-36  lg:-mt-16'>
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