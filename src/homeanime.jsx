import React, { useState, useEffect } from "react";
import './home.css';

function Homeanime() {
    
    useEffect(() => {
    const onScroll = () => {
    const scrollPosition = window.pageYOffset;
    const windowHeight = window.innerHeight;
    const bodyHeight = document.body.offsetHeight;
   
    if (scrollPosition === 0) { // Si l'utilisateur est tout en haut de la page
        window.addEventListener('wheel', function(e) {
          if (e.deltaY > 0) { // Si l'utilisateur fait défiler vers le bas
            window.scrollTo({top: bodyHeight, behavior: 'smooth'}); // Défiler vers le bas de la page
            window.removeEventListener('wheel', arguments.callee); // Supprimer l'écouteur d'événement une fois que le défilement est terminé
          }
        });
      }

    if (scrollPosition + windowHeight >= bodyHeight) { // Si l'utilisateur est tout en bas de la page
        window.addEventListener('wheel', function(e) {
        if (e.deltaY < 0) { // Si l'utilisateur fait défiler vers le haut
        window.scrollTo({top: 0, behavior: 'smooth'}); // Défiler vers le haut de la page
        window.removeEventListener('wheel', arguments.callee); // Supprimer l'écouteur d'événement une fois que le défilement est terminé
        }
        });
    }
    
   
    
    };
    
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
    });
    
    return null;
    }
    
    export default Homeanime;