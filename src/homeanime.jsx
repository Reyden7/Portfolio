import React, { useState, useEffect } from "react";
import './home.css';

function Homeanime({ setBackgroundColor }) {

    useEffect(() => {
    const onScroll = () => {
    const scrollPosition = window.pageYOffset;
    if (scrollPosition > 100) {
    setBackgroundColor('#E8ECEE');
    console.log("second")
    } else {
    setBackgroundColor('#2A2430');
    console.log("main")
    }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
    }, [setBackgroundColor]);
    
    return null;
    }
    
    export default Homeanime;