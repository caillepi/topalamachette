import React from 'react';
import "./ImageComponent.css"

const ImageComponent = ({ img, alt, description }) => {
    return (
        <div className = 'ImageComponentDescription'>
            <img src = { img } alt = { alt } />
            <span>{ description }</span>
        </div>
    );
};

export default ImageComponent;