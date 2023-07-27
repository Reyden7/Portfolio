import React from "react";
import Navbare from "../navbar";
import "../etabs.css";
import LogoStudio from "../img/androidStudiologo.png";
import LogoFirebase from "../img/Firebaselogo.png";
import LogoK from "../img/Kotlinlogo.png";
import Tab1 from "../img/tab1.png";
import Tab2 from "../img/tab2.png";
import Etabs from "../img/etab.mp4";
import Tab4 from "../img/tab4.png";
import Tab5 from "../img/tab4.png";
import AOS from "aos";
import Projets from "../mesprojet";

// You can also use <link> for styles
// ..
AOS.init();

export default function etabs() {
  return (
    <div>
      <div className=" lg:-mt-36">
        <Navbare />
      </div>
      <div className="title">Etabs</div>
      <div className="subtitle"> l’application pour tout musicien</div>
      <div className="circle-container">
        <div className="circle">
          <img src={LogoStudio} alt="Android Studio Logo" />
        </div>
        <div className="circle">
          <img src={LogoFirebase} alt="Firebase Logo" />
        </div>
        <div className="circle">
          <img src={LogoK} alt="Kotlin Logo" />
        </div>
      </div>
      <div className=" font-openSans text justify-center lg:ml-96  sm:ml-12 lg:mr-96  sm:mr-12 mt-28 backdrop-blur-sm bg-white/10  rounded rounded-xl p-5 ">
        {" "}
        En tant que musicien expérimenté, j'ai longtemps cherché l'application
        idéale pour lire mes tablatures et partitions, avec des fonctionnalités
        telles que l'enregistrement, le tri par difficulté ou instrument, ainsi
        que la possibilité de sauvegarder mes favoris. Malheureusement, aucune
        des applications existantes ne répondait à mes besoins spécifiques.
      </div>
      <div className=" lg:mb-96 sm:mb-0 font-openSans text justify-center lg:ml-96  sm:ml-12 lg:mr-96  sm:mr-12 mt-16 backdrop-blur-sm bg-white/10  rounded rounded-xl p-5">
        {" "}
        C'est pourquoi j'ai décidé de créer ma propre application, en
        collaboration avec un ami pour le design, afin de gérer mes tablatures
        de manière efficace. Nous avons accordé une attention particulière à
        l'ergonomie et à l'utilisabilité de l'application, qui a été développée
        en utilisant Kotlin sur Android Studio. Pour stocker les tablatures au
        format JPG, nous avons opté pour Firebase.
      </div>
      <div className=" font-openSans text justify-center lg:ml-96  sm:ml-12 lg:mr-96  sm:mr-12 mt-16 ">
        {" "}
        Images
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 sm:align-middle lg:grid-cols-5 gap-6 justify-center items-center mt-16">
        <img
          data-aos="fade-up"
          src={Tab1}
          alt="image 1"
          className="h-500 w-auto lg:w-11/12 image-hover"
        />
        <img
          data-aos="fade-up"
          src={Tab2}
          alt="image 2"
          className="h-500 w-auto lg:w-11/12 image-hover"
        />
        <video
          data-aos="fade-up"
          src={Etabs}
          alt="video"
          className="h-500 w-auto lg:w-auto video-container"
          height={500}
          width={300}
          autoPlay
          loop
          controls={false}
        />
        <img
          data-aos="fade-up"
          src={Tab4}
          alt="image 4"
          className="h-500 w-auto lg:w-11/12 image-hover"
        />
        <img
          data-aos="fade-up"
          src={Tab5}
          alt="image 5"
          className="h-500 w-auto lg:w-11/12 image-hover"
        />
      </div>
      <div className="w-full items-center justify-center lg:mb-48 lg:-mt-48">
        <div className="lg:ml-40 sm:mt-16  lg:ml-0 ">
          <Projets />
        </div>
      </div>
    </div>
  );
}
