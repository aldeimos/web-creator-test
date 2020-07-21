import React from 'react';

import GalleryItem from '../GalleryItem';
import GalleryControls from '../GalleryControls';

import './index.css';

export const GalleryComponent = ({ id, images, slidesPerView, title}) => {

  return (
    <div
      className="gallery"
      key={id}
    >
        <h2 className="gallery__title">
          {title}
        </h2>
      <div className="gallery__images">
        <div className="row">
          {images && images.slice(0, 3).map((image) => <GalleryItem key={image.id} src={image.src}/>)}
        </div>
      </div>
      <GalleryControls/>
    </div>
  )
};

