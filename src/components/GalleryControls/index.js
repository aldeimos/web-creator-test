import React from 'react';

import GalleryControlStep from '../GalleryControlStep';

import './index.scss'

const GalleryControls = ({ store }) => {

  const centerControlHandler = (slideNum) => {
    store.setActiveSlide(slideNum);
    store.setActiveImages();
  };

  return (
    <div className="gallery-controls">
      <div className="row">
        <div className="col-sm-12 col-md-4 col-xl-4">
          <div
            className="gallery-controls__control gallery-controls__control--left"
            onClick={() => store.decrementActiveSlide()}
          >
          </div>
        </div>
        <div className="gallery-controls__control gallery-controls__control--center col-sm-12 col-md-4 col-xl-4">
          <GalleryControlStep
            setActiveSlide={() => centerControlHandler(1)}
            isActive={store.activeSlide === 1}
          />
          <GalleryControlStep
            setActiveSlide={() => centerControlHandler(2)}
            isActive={store.activeSlide === 2}
          />
          <GalleryControlStep
            setActiveSlide={() => centerControlHandler(3)}
            isActive={store.activeSlide === 3}
          />
        </div>
        <div className="col-sm-12 col-md-4 col-xl-4">
          <div
            onClick={() => store.incrementActiveSlide()}
            className="gallery-controls__control gallery-controls__control--right"
          >
          </div>
        </div>
      </div>
    </div>
  )
};

export default GalleryControls;
