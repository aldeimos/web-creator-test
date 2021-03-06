import React from 'react';

import './index.scss';

const GalleryItem = ({ src }) => {

  return (
    <div className="gallery-item col-sm-4 col-md-4 col-xl-4">
        <img
          className="img-fluid"
          src={`https://vkclub.su/_data/stickers/animirovannyy_diggi/sticker_vk_animirovannyy_diggi_${src}`}
          alt=""
        />
    </div>
  )
};

export default GalleryItem;
