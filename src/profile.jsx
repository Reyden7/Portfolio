import React, { useState, useEffect } from "react";
import Avatar from './img/Avatar.png';
import './profile.css'

function Profile() {

  const [transformed, setTransformed] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setTransformed(true);
      } else {
        setTransformed(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const trapezoidClass = `trapezoid${transformed ? "-transformed" : ""}`;
  const trapez2Class = `trapez2${transformed ? "-transformed" : ""}`;
  const trapez3Class = `trapez3${transformed ? "-transformed" : ""}`;
  const avatarClasse = `avatar${transformed ? "-transformed" : ""}`;

    return (
               <div className="relative overflow-hidden">

                <div className={trapezoidClass}> 
                  <img   className={avatarClasse} src={Avatar}></img>
                    <div className={trapez2Class}>
                      <div className={trapez3Class}></div>
                </div>
                
            
        </div>
               </div>
        

    )
}

export default Profile