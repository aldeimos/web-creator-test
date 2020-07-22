import React from 'react';

import './index.scss';

const GalleryControlStep = ({ isActive, setActiveSlide }) => {



  return (
    <div
      className={isActive ? 'gallery-control-step gallery-control-step--active' : 'gallery-control-step'}
      onClick={setActiveSlide}
    />
  )
};

export default GalleryControlStep;
