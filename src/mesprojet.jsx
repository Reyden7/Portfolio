import React from 'react';
import Projets from './projets'
import logotest from './img/Avatar.png'
import EtabsLogo from './img/competences.png'
import TRNLogo from './img/hobbies.png'
import VertiscreenLogo from './img/projets.png'
import asuivreLogo from './img/contact_.png'

function mesprojets(){
    
    const images = [
        'https://source.unsplash.com/random/400x400',
        'https://source.unsplash.com/random/401x401',
        'https://source.unsplash.com/random/402x402',
        'https://source.unsplash.com/random/403x403'
    ];
    const getRandomImage = () => {
        const index = Math.floor(Math.random() * images.length);
        return images[index];
    };


   
    return(
        <div>
        
            <div id="projets-container"  className=' lg:mt-64 lg:ml-20 flex'>
                <div className=' flex-1 mt-16'>
                    <Projets             
                        imageSrc={getRandomImage()}
                        title="Etabs"
                        description="Application pour tout guitariste qui se respect !"/>
                </div>
                <div className=' flex-1 -mt-16'>
                    <Projets             
                        imageSrc={getRandomImage()}
                        title="The Revi Network"
                        description="Le nouveau site de la juniore agence pour le master REVI"/>
                </div>
                <div className=' flex-1 mt-16'>
                    <Projets             
                        imageSrc={getRandomImage()}
                        title="Vertiscreen"
                        description="Un système ingénieux de double écran pour ordinateur portable"/>
                </div>
                <div className=' flex-1 -mt-16'>
                    <Projets             
                        imageSrc={getRandomImage()}
                        title="A venir"
                        description="A venir ..."/>
                </div>
                    
            </div> 
                
            
        </div>
           

        


    )
}
export default mesprojets;