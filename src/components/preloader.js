import React, { useEffect } from "react";
import Navbare from "../navbar";
import "../preloader.css";
import { preLoaderAnim } from "../animations";

const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);

  return (
    <div className="preloader">
      <div className="texts-container">
        <span>Developer,</span>
        <span>Guitariste,</span>
        <span>Pilote</span>
      </div>
    </div>
  );
};

export default PreLoader;
