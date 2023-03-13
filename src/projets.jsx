import React, { useState } from "react";


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
      borderRadius: "50%",
      overflow: "hidden",
      cursor: "pointer",
      position: "relative",
      transition: "all 0.3s",
      margin: "0 auto",
      boxshadow: "9px 9px 18px #110e13, -9px -9px 18px #433a4d"
    };
  
    const imageStyle = {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    };
  
    const cardStyle = {
      
      width: "500px",
      height: "600px",
      backgroundColor: "white",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      padding: "10px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "10px",
      boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.3)",
      transition: "all 1s",
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
      position: "relative",
      top: "50%",
      left: "45%",
      transform: "translate(-50%, -50%)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "10px",
      boxShadow: "9px 9px 18px #110e13, -9px -9px 18px #433a4d",
      transition: "all 1s",
      opacity: hovered ? "1" : "0",
      visibility: hovered ? "visible" : "hidden",
      
    };
  
    return (
      <div
        style={hovered ? circleToCardStyle : circleStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {hovered ? (
          <div  style={{ height: "400px", marginBottom: "10px" }}>
            <img className=" rounded-2xl"
              src={imageSrc}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
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
          <div className=" mt-7" style={{ flex: "1", textAlign: "center" }}>
            <h2 style={titleStyle}>{title}</h2>
            <p style={descriptionStyle}>{description}</p>
            </div>
        )}
        </div>
    )
}
export default Projets;