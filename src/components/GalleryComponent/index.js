import React from 'react';

import GalleryItem from '../GalleryItem';
import GalleryControls from '../GalleryControls';

import './index.scss';

export const GalleryComponent = ({ store, id, title}) => {


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
          {store.activeGalleryImages
            .map((image) =>
              <GalleryItem
                key={image.id}
                src={image.src}
              />)
          }
        </div>
      </div>
      <GalleryControls store={store}/>
    </div>
  )
};

