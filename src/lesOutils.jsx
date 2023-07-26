import React, { useState, useEffect } from 'react';
import sql from './img/sql.png';
import tailwind from './img/tailwind.png';
import unity3d from './img/unity3d.png';
import vscode from './img/vscode.png';
import node from './img/node.png';
import figma from './img/figma.png';
import gpt from './img/gpt.png';
import git from './img/git.png';
import Blender from './img/Blender.png';
import bootstrap from './img/Bootstrap.png';
import './lesoutils.css';

const Carousel = () => {
  const images = [
    { id: 1, src: sql, title: 'SQL' },
    { id: 2, src: tailwind, title: 'Tailwind' },
    { id: 3, src: unity3d, title: 'Unity 3D' },
    { id: 4, src: vscode, title: 'VS Code' },
    { id: 5, src: node, title: 'Node.js' },
    { id: 6, src: figma, title: 'Figma' },
    { id: 7, src: gpt, title: 'GPT' },
    { id: 8, src: git, title: 'Git' },
    { id: 9, src: Blender, title: 'Blender' },
    { id: 10, src: bootstrap, title: 'Bootstrap' }
  ];

  useEffect(() => {
    const root = document.documentElement;
    const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
    const marqueeContent = document.querySelector("ul.marquee-content");
    root.style.setProperty("--marquee-elements", marqueeContent.children.length);
    for(let i=0; i<marqueeElementsDisplayed; i++) {
      marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
    }
  }, []);

  const isMobile = window.innerWidth <= 768; // Vérifie si la largeur de l'écran est inférieure ou égale à 768px (taille typique des téléphones)
  var imageSize = '';
if (isMobile) {
   imageSize = `calc(250% / ${images.length})`; // Définit la taille de l'image en pourcentage en fonction du nombre d'images

} else {
   imageSize = `calc(90% / ${images.length})`; // Définit la taille de l'image en pourcentage en fonction du nombre d'images

}

 
  return (
    <div className="container mt-28 mb-28 w-auto" data-aos="fade-up">
      <div className="row">
        <div className="marquee align-content-center">
          <ul className="marquee-content" style={{ width: `${images.length * 15}%` }}>
            {images.map((image, index) => (
              <li key={index} style={{ width: imageSize }}>
                <a title={image.title}>
                  <img
                    alt={image.title}
                    src={image.src}
                    width="100%"
                    aria-hidden="true"
                    className="w-100 imgsize"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
