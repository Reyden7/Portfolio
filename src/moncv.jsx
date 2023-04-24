import React from 'react';
import cvLink from './img/CV.png'
import './moncv.css'
function CV(){
    
    return(
        <a href={cvLink} download="CV_quentinC.png">
        <button id="cv" class=" text-gray-800 text-red-600 font-semibold py-2 px-4  rounded-full shadow-lg hover:shadow-xl transition duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 inline-flex mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M4,4 L4,18 L16,18 L16,10 L12,10 L12,12 L14,12 L14,16 L6,16 L6,6 L14,6 L14,8 L16,8 L16,4 L4,4 Z M14,2 L18,6 L18,18 C18,19.1 17.1,20 16,20 L4,20 C2.9,20 2,19.1 2,18 L2,6 C2,4.9 2.9,4 4,4 L10,4 L10,6 L4,6 L4,18 L16,18 L16,6 L14,6 L14,2 Z" clip-rule="evenodd" />
          </svg>
          Télécharger mon CV en PDF
        </button>
      </a>
      


    )
}
export default CV;