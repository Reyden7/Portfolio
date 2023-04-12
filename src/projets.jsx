import React, { useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


function Projets({ title, imageSrc, description }){
    
    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
      setHovered(true);
     
    };
  
    const handleMouseLeave = () => {
      setHovered(false);
      
    };

   
  
    const circleStyle = {
      width: "250px",
      height: "250px",
      overflow: "hidden",
      borderRadius: "50%",
      cursor: "pointer",
      position: "absolute",
      transition: "all 0.5s ease-in-out",
      margin: "auto",
      backgroundColor: "grey",
      backgroundImage: "linear-gradient(to bottom, #939097 0%, #18141b 100%)",
      boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.7), -5px -5px 10px rgba(255, 255, 255, 0.1)"
      };
  
    const imageStyle = {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transition: "all 0.5s ease-in-out"
    };
  
    const cardStyle = {
      
      width: "300px",
      height: "600px",
      backgroundColor: "white",
      position: "relative",
      transform: "translate(0%, 0%)",
      padding: "10px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "10px",
      boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.3)",
      transition: "",
      opacity: hovered ? "1" : "0",
      visibility: hovered ? "visible" : "hidden"
      
    };
  
    const titleStyle = {
      fontSize: "24px",
      fontWeight: "bold",
      marginBottom: "10px"
    };
  
    const descriptionStyle = {
      fontSize: "16px",
      textAlign: "center"
    };
  
    const circleToCardStyle = {
      
      width: "300px",
      height: "500px",
      borderRadius: "30px",
      backgroundColor: '#D9D9D9',
      position: "absolute",
      transform: "translate(-5%, -15%)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "10px",
      boxShadow: "9px 9px 18px #110e13, -9px -9px 18px #433a4d",
      transition: "all 0.5s ease-in-out",
      opacity: hovered ? "1" : "0",
      visibility: hovered ? "visible" : "hidden",
    };

    
  
    return (
     
      <div data-aos="fade-up" 
        style={hovered ? circleToCardStyle : circleStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {hovered ? (
          <div style={{ height: "400px", marginBottom: "5px", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <img
            className="rounded-2xl"
            src={imageSrc}
            style={{ maxWidth: "150%", maxHeight: "150%", objectFit: "fill", objectPosition: "center",  transition: "all 0.5s ease-in-out" }}
          />
        </div>
        ) : (
          <img
            src={imageSrc}
            alt={title}
            style={imageStyle}
          />
        )}
        {hovered && (
          <div className=" -mt-7" style={{ flex: "1", textAlign: "center" }}>
            <h2 style={titleStyle}>{title}</h2>
            <p style={descriptionStyle}>{description}</p>
            </div>
        )}
        </div>
        
    )
}
export default Projets;