import React from 'react';

import './index.scss';

const GalleryControlStep = ({ isActive, handler }) => {

  return (
    <div className={isActive ? 'gallery-control-step gallery-control-step--active' : 'gallery-control-step'}/>
  )
};

export default GalleryControlStep;
