import React from 'react';

import GalleryControlStep from '../GalleryControlStep';

import './index.scss'

const GalleryControls = () => {
  return (
    <div className="gallery-controls">
      <div className="row">
        <div className="col-sm-12 col-md-6 col-xl-4">
          <div className="gallery-controls__control gallery-controls__control--left">
          </div>
        </div>
        <div className="gallery-controls__control gallery-controls__control--center col-sm-12 col-md-6 col-xl-4">
          <GalleryControlStep isActive={true}/>
          <GalleryControlStep isActive={false}/>
          <GalleryControlStep isActive={false}/>
        </div>
        <div className="col-sm-12 col-md-6 col-xl-4">
          <div className="gallery-controls__control gallery-controls__control--right">
          </div>
        </div>
      </div>
    </div>
  )
};

export default GalleryControls;
