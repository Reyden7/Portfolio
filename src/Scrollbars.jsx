import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import './scrollbare.css';



function bar(){

  const renderTrackVertical = ({ style, ...props }) => {
    const customStyle = {
        backgroundColor: '#2A2430',
        width: '10px',
        right: '0px',
        bottom: '0px',
        top: '0px',
        borderRadius: '5px',
    };
    return <div {...props} style={{ ...style, ...customStyle }} />;
};

const renderThumbVertical = ({ style, ...props }) => {
    const customStyle = {
        backgroundColor: '#6B7280',
        borderRadius: '5px',
    };
    return <div {...props} style={{ ...style, ...customStyle }} />;
};

return(
    <Scrollbars renderTrackVertical={renderTrackVertical} renderThumbVertical={renderThumbVertical}>
    {/* contenu de votre section ici */}
  </Scrollbars>
)
}

export default bar;