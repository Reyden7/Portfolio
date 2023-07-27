import React from "react";
import Navbare from "../navbar";
import "../vertiscreen.css";
import Img1 from "../img/ds1.jpg";
import Img2 from "../img/ds2.jpg";
import Img3 from "../img/ds3.jpg";
import Img4 from "../img/ds4.jpg";
import Img5 from "../img/ds5.jpg";
import Img6 from "../img/ds6.jpg";
import Img7 from "../img/ds7.jpg";
import Img8 from "../img/ds8.jpg";
import Img9 from "../img/ds9.jpg";
import Img10 from "../img/ds10.jpg";
import AOS from "aos";
import Projets from "../mesprojet";

// You can also use <link> for styles
// ..
AOS.init();

export default function vertiscreen() {
  return (
    <div>
      <div className=" lg:-mt-36">
        <Navbare />
      </div>
      <div className="titleV">VertiScreen</div>
      <div className="subtitleV">
        {" "}
        Un écran suplémentaire pour votre pc portable
      </div>
      <div className=" font-openSans italic text justify-center lg:ml-96  sm:ml-12 lg:mr-96  sm:mr-12 mt-28 mb-36">
        {" "}
        J'ai eu la chance de recevoir mon premier ordinateur fixe à l'âge de 10
        ans, en guise de cadeau d'anniversaire offert par mes parents. Durant
        mes années de formation en BTS, j'ai continué à utiliser ce même
        ordinateur sans rencontrer aucun problème particulier. Cependant, les
        choses ont changé lorsque j'ai entamé mes études post-bac.
      </div>

      <div className="lg:flex" style={{ justifyContent: "space-between" }}>
        <div data-aos="fade-right" className="lg:flex-1 lg:ml-24">
          <div className="font-openSans titletextV text-center lg:text-left sm:ml-12 lg:mr-96 lg:mt-40 sm:mr-12 mt-16 lg:w-1/2 ">
            Nous sommes en 2008
          </div>
          <div className="font-openSans textV sm:text-center lg:text-justify  sm:ml-12  sm:mr-12 backdrop-blur-sm bg-white/10  rounded rounded-xl p-5">
            Pendant mes années de BTS à Chalon-sur-Saône, j'ai dû faire face à
            la difficulté de transporter mon ordinateur fixe chaque semaine
            entre mon domicile et mon lieu d'études. C'est pourquoi j'ai décidé
            d'investir dans un ordinateur portable pour gagner en mobilité.
            <br></br>
            <br></br>
            En tant que développeur, j'ai rapidement ressenti le besoin d'avoir
            un second écran pour améliorer mon confort de travail. J'ai alors
            construit un bureau improvisé où j'ai pu installer un écran fixe, me
            permettant ainsi de suivre mes cours, travailler chez moi et
            poursuivre mes projets personnels. C'est d'ailleurs à cette époque
            que j'ai eu l'idée de créer un jeu Mario sur lequel j'ai travaillé
            avec passion.
          </div>
        </div>
        <div data-aos="fade-left" className="lg:flex-1 lg:ml-24 mt-24">
          <div className="font-openSans titletextV sm:text-center lg:text-left sm:ml-12 mt-16">
            2020 : COVID !!
          </div>
          <div className="font-openSans textV sm:text-center lg:text-left  sm:ml-12 sm:mr-12 backdrop-blur-sm bg-white/10  rounded rounded-xl p-5">
            Je suis en situation d'alternance dans mon entreprise mais suite aux
            mesures de confinement liées à la pandémie de COVID-19, nous sommes
            contraints de travailler en télétravail, ce qui m'amène à retourner
            chez mes parents. Dans le cadre de mon télétravail, j'ai tenté
            d'optimiser mon confort en travaillant depuis mon lit avec mon
            ordinateur portable posé sur mes genoux, accompagné de mon écran
            fixe installé à côté de moi. Cependant, cette configuration s'est
            rapidement révélée peu pratique.
          </div>
          <div className="font-openSans textV sm:text-center lg:text-left  sm:ml-12 sm:mr-12 mt-5 backdrop-blur-sm bg-white/10  rounded rounded-xl p-5">
            L'avantage de l'ordinateur portable réside dans sa mobilité,
            permettant de travailler de n'importe quel endroit, que ce soit
            depuis un bureau, un canapé ou même un lit. C'est d'ailleurs dans le
            canapé que j'ai eu l'idée du projet DUALSCREEN !
          </div>
          <div className="font-openSans textV sm:text-center lg:text-left  sm:ml-12 sm:mr-12 mt-5 backdrop-blur-sm bg-white/10  rounded rounded-xl p-5">
            Un soir, en train de travailler sur un autre projet (le site de la
            Junior Agence du Master REVI), j'étais assis dans le canapé avec mon
            ordinateur portable posé sur mes genoux, avec mon père à ma droite
            et ma mère à ma gauche. Cependant, la configuration ne permettait
            pas d'avoir un second écran à côté de moi comme il en existe sur le
            marché.
          </div>
          <div className="font-openSans textV sm:text-center lg:text-left  sm:ml-12 sm:mr-12 mt-5 backdrop-blur-sm bg-white/10  rounded rounded-xl p-5">
            Face à ce défi, j'ai réfléchi à une solution et j'ai envisagé
            l'option d'un écran vertical, superposé au-dessus de mon ordinateur
            portable, étant donné que la position horizontale était impossible.
          </div>
        </div>
      </div>

      <div className="lg:flex">
        <div data-aos="fade-up-right" className="lg:flex-1 lg:ml-24 mt-24 ">
          <div className=" font-openSans titletextV sm:text-center lg:text-left sm:ml-12 mt-16 ">
            La carte video
          </div>
          <div className="  font-openSans textV sm:text-center lg:text-left  sm:ml-12 sm:mr-12 backdrop-blur-sm bg-white/10  rounded rounded-xl p-5">
            Pour ce projet, j'ai eu besoin d'un écran de 17 pouces provenant
            d'un ancien ordinateur portable, dont le PC ne fonctionnait plus,
            mais dont j'ai pu récupérer la dalle.
          </div>
          <div className="font-openSans textV sm:text-center lg:text-left  sm:ml-12 sm:mr-12 mt-5 backdrop-blur-sm bg-white/10  rounded rounded-xl p-5">
            Le premier défi a été de trouver un moyen d'alimenter la dalle et de
            faire passer le flux vidéo. Habituellement, l'écran d'un ordinateur
            portable est alimenté par la carte graphique intégrée à la carte
            mère.
          </div>
          <div className="font-openSans textV sm:text-center lg:text-left  sm:ml-12 sm:mr-12 mt-5 backdrop-blur-sm bg-white/10  rounded rounded-xl p-5">
            Après de nombreuses recherches, j'ai finalement trouvé une solution
            adéquate : une petite carte compatible avec plusieurs dalles de PC
            portable, qui permet d'alimenter l'écran et de faire passer le flux
            vidéo par HDMI, VGA ou DVI. Il ne me restait plus qu'à ajouter une
            alimentation secteur délivrant du 12V, et le tour était joué !
          </div>
        </div>
        <div data-aos="fade-up-left" className="lg:flex-1 lg:ml-24 mt-24 ">
          <div className=" font-openSans titletextV sm:text-center lg:text-left sm:ml-12 mt-16 mr-10 image-hover ">
            <img
              className="imgarondie"
              src={Img1}
              alt="Description de l'image"
            />
          </div>
        </div>
      </div>

      <div className="lg:flex">
        <div
          data-aos="fade-up-right"
          className="lg:flex-1 lg:ml-24 mt-24 lg:block sm:hidden "
        >
          <div className=" font-openSans titletextV sm:text-center lg:text-left sm:ml-12 mt-16 mr-10 lg:flex">
            <img
              className="imgarondie lg:w-96 lg:h-72 lg:mt-20 lg:flex-1 image-hover  "
              src={Img3}
              alt="Description de l'image"
            />
            <img
              className="imgarondie lg:w-72 lg:flex-1 lg:ml-12 sm:mt-10 image-hover "
              src={Img2}
              alt="Description de l'image"
            />
          </div>
        </div>
        <div data-aos="fade-up-left" className="lg:flex-1 lg:ml-24 mt-24 ">
          <div className=" font-openSans titletextV sm:text-center lg:text-left sm:ml-12 mt-16 ">
            Le support
          </div>
          <div className="font-openSans textV sm:text-center lg:text-left sm:ml-12 sm:mr-12 backdrop-blur-sm bg-white/10  rounded rounded-xl p-5">
            <ul>
              <li>
                Trois plateaux distincts ont été nécessaires pour ce projet :
              </li>
              <ul>
                <li>Le premier plateau pour soutenir l'écran</li>
                <li>
                  Le deuxième plateau, qui sera placé à l'arrière de l'écran de
                  l'ordinateur portable
                </li>
                <li>
                  Le troisième plateau qui servira de support pour l'ordinateur
                  portable, avec un pied pour le maintenir en place
                </li>
              </ul>
              <li>
                Des charnières provenant de vieux ordinateurs portables ont été
                utilisées pour la rotation de l'écran du haut. Il était
                essentiel d'utiliser des charnières suffisamment résistantes
                pour éviter que l'écran du haut ne s'incline trop facilement.
              </li>
            </ul>
          </div>
          <div className="font-openSans textV sm:text-center lg:text-left sm:ml-12 sm:mr-12 mt-5 backdrop-blur-sm bg-white/10  rounded rounded-xl p-5">
            <ul>
              <li>
                Trois autres charnières ont été utilisées pour permettre un
                système de pliage facile.
              </li>
              <li>
                Huit aimants ronds ont été utilisés pour maintenir fermement le
                système en place sur l'ordinateur portable.
              </li>
            </ul>
          </div>
          <div className="lg:flex-1 lg:ml-24 mt-24 lg:hidden sm:block ">
            <div className=" font-openSans titletextV sm:text-center lg:text-left sm:ml-12 mt-16 mr-10 lg:flex">
              <img
                className="imgarondie lg:w-96 lg:h-72 lg:mt-20 lg:flex-1 "
                src={Img3}
                alt="Description de l'image"
              />
              <img
                className="imgarondie lg:w-72 lg:flex-1 lg:ml-12 sm:mt-10"
                src={Img2}
                alt="Description de l'image"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        data-aos="fade-up"
        className=" font-openSans titletextV sm:text-center lg:text-left sm:ml-12 mt-16 "
      >
        L'écran seul
      </div>
      <div className="lg:flex">
        <div className="lg:flex-1 lg:ml-24 mt-24 ">
          <div className=" font-openSans titletextV sm:text-center lg:text-left sm:ml-12 mt-16 mr-10  image-hover ">
            <img
              className="imgarondie  lg:h-72 lg:mt-20"
              src={Img4}
              alt="Description de l'image"
            />
          </div>
        </div>
        <div className="lg:flex-1 lg:ml-24 mt-24 ">
          <div className=" font-openSans titletextV sm:text-center lg:text-left sm:ml-12 mt-16 mr-10 image-hover ">
            <img
              className="imgarondie  lg:h-72 lg:mt-20"
              src={Img5}
              alt="Description de l'image"
            />
          </div>
        </div>
      </div>

      <div className=" font-openSans titletextV sm:text-center lg:text-left sm:ml-12 mt-16 ">
        La finalité
      </div>
      <div className="lg:flex center">
        <div
          data-aos="fade-up"
          className="lg:flex-1 lg:ml-24 lg:mb-36 lg:mt-36 image-hover "
        >
          <div className=" font-openSans titletextV sm:text-center lg:text-left sm:ml-12 mt-16 mr-10 ">
            <img
              className="imgarondie  lg:h-96 lg:w-96"
              src={Img6}
              alt="Description de l'image"
            />
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="lg:flex-1 lg:ml-24 lg:mb-36 image-hover  "
        >
          <div className=" font-openSans titletextV sm:text-center lg:text-left sm:ml-12 mt-16 mr-10 ">
            <img
              className="imgarondie  lg:h-96 lg:w-96 "
              src={Img7}
              alt="Description de l'image"
            />
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="lg:flex-1 lg:ml-24 lg:mb-36 lg:mt-36 image-hover "
        >
          <div className=" font-openSans titletextV sm:text-center lg:text-left sm:ml-12 mt-16 mr-10 ">
            <img
              className="imgarondie  lg:h-96 lg:w-96 "
              src={Img8}
              alt="Description de l'image"
            />
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="lg:flex-1 lg:ml-24 lg:mb-36 image-hover  "
        >
          <div className=" font-openSans titletextV sm:text-center lg:text-left sm:ml-12 mt-16 mr-10 ">
            <img
              className="imgarondie  lg:h-96 lg:w-96"
              src={Img9}
              alt="Description de l'image"
            />
          </div>
        </div>
        <div className="lg:flex-1 lg:ml-24 lg:mr-24 lg:mb-36 lg:mt-36 image-hover ">
          <div
            data-aos="fade-up"
            className=" font-openSans titletextV sm:text-center lg:text-left sm:ml-12 mt-16 mr-10 "
          >
            <img
              className="imgarondie  lg:h-96 lg:w-96 "
              src={Img10}
              alt="Description de l'image"
            />
          </div>
        </div>
      </div>
      <div className="w-full items-center justify-center lg:mb-48 lg:-mt-48">
        <div className="lg:ml-40 sm:mt-16  lg:ml-0 ">
          <Projets />
        </div>
      </div>
    </div>
  );
}
