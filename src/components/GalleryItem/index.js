import React from 'react';

import './index.css';

const GalleryItem = ({ src }) => {

  return (
    <div className="gallery-item col-sm-12 col-md-6 col-xl-4">
        <img
          className="img-fluid"
          src={`https://vkclub.su/_data/stickers/animirovannyy_diggi/sticker_vk_animirovannyy_diggi_${src}`}
          alt=""
        />
    </div>
  )
};

export default GalleryItem;
