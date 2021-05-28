import React from 'react'
import DefaultImage from '../../images/default.png'
const ImageCardItem = ({ image }) => {

    const {  images } = image;
    return (
        <div className='card-item'>
        <img src={images && images.length ? images[0].url : DefaultImage} alt="ImageCard"/>
      </div>
    )
}

export default ImageCardItem
