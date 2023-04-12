import React from 'react'
import Navbare from '../navbar'
import LogoHTML from "../img/html.png"
import LogoCSS from "../img/css.png"
import LogoB from "../img/Bootstrap.png"
import Revi from "../img/revinetwork.mp4"

export default function revi() {
  return (
    <div>
       <div className=' lg:-mt-36'><Navbare/></div>
       <div className="title">The Revi Network</div>
       <div className="subtitle"> https://www.therevinetwork.fr</div>
       <div className="circle-container" >
            <div className="circle">
                <img src= {LogoHTML} alt="Android Studio Logo" />
            </div>
            <div className="circle">
                <img src={LogoCSS} alt="Firebase Logo" />
            </div>
            <div className="circle">
                <img src={LogoB} alt="Kotlin Logo" />
            </div>
        </div>
        <div className=" font-openSans text justify-center lg:ml-96  sm:ml-12 lg:mr-96  sm:mr-12 mt-28 "> En 2021, j'ai été contacté par mon ancien camarade de BTS pour collaborer sur un projet de présentation de la Junior Agence, une association à but non lucratif créée par les étudiants du Master REVI. L'objectif de cette association est de financer le Master REVI à travers diverses initiatives telles que l'échange de services. Après plusieurs réunions avec les membres de la Junior Agence et les étudiants impliqués dans le projet, nous avons déterminé le contenu du site web. Mon rôle dans ce projet était le développement du site, tandis que mon ami était en charge de la partie design.</div>
        <div className=" font-openSans text justify-center lg:ml-96  sm:ml-12 lg:mr-96  sm:mr-12 mt-28 "> J'ai conçu et développé ce site web en utilisant les langages HTML, CSS et JavaScript, ainsi que la bibliothèque Bootstrap pour certains composants et le rendu responsive.</div>
        <div className=" font-openSans text justify-center lg:ml-96  sm:ml-12 lg:mr-96  sm:mr-12 mt-28 "> Pour offrir une expérience de navigation unique, j'ai intégré un scroll personnalisé et des effets de parallaxe sur la page principale. De plus, un carrousel automatique a été ajouté pour présenter les différents partenaires de la Junior Agence.</div>
        <div className=" font-openSans text justify-center lg:ml-96  sm:ml-12 lg:mr-96  sm:mr-12 mt-28 "> La page "Nous contacter" permet aux utilisateurs d'envoyer un mail à l'association, tandis que la page "Nos partenaires" présente les sponsors en détails.</div>
        <div className=" font-openSans text justify-center lg:ml-96  sm:ml-12 lg:mr-96  sm:mr-12 mt-28 "> La page "Bureau" met en avant les 3 principaux dirigeants de l'agence, tandis que la page "Événements" permet d'afficher la page Facebook et LinkedIn où sont renseignés les événements passés, présents et futurs de la Junior Agence.</div>
        <video className=' mt-16' src={Revi} controls="false" autoPlay loop />
      
    </div>
  )
}