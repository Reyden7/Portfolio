import React from 'react';
import Projets from './projets'
import logotest from './img/Avatar.png'
function mesprojets(){
    
    return(
        <div>
            <div className=' mt-64'>
                <Projets             
                imageSrc={logotest}
                title="test"
                description="Ceci est la description de mon image"/>
            </div> 
            
        </div>
           

        


    )
}
export default mesprojets;