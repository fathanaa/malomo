import React from "react";
import './ImageSlide.css'

const ImageSlide = ({data}) => {
    return(
        <div className='ImageSlide'>
            <img
            className='ImageSlide'
            alt={data.name}
            src={data.source}
            width={453}
            height={255}
            />
        </div>
    )
}

export default ImageSlide