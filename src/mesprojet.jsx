import React from 'react';
import Projets from './projets'
import logotest from './img/Avatar.png'
import EtabsLogo from './img/competences.png'
import TRNLogo from './img/hobbies.png'
import VertiscreenLogo from './img/projets.png'
import asuivreLogo from './img/contact_.png'
function mesprojets(){
    
    return(
        <div>
            <div className=' mt-44 lg:ml-20 flex'>
                <div className=' flex-1 mt-16'>
                    <Projets             
                        imageSrc={EtabsLogo}
                        title="Etabs"
                        description="Application pour tout guitariste qui se respect !"/>
                </div>
                <div className=' flex-1 -mt-16'>
                    <Projets             
                        imageSrc={TRNLogo}
                        title="The Revi Network"
                        description="Le nouveau site de la juniore agence pour le master REVI"/>
                </div>
                <div className=' flex-1 mt-16'>
                    <Projets             
                        imageSrc={VertiscreenLogo}
                        title="Vertiscreen"
                        description="Un système ingénieux de double écran pour ordinateur portable"/>
                </div>
                <div className=' flex-1 -mt-16'>
                    <Projets             
                        imageSrc={asuivreLogo}
                        title="A venir"
                        description="A venir ..."/>
                </div>
                    
            </div> 
                
            
        </div>
           

        


    )
}
export default mesprojets;