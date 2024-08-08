import React from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  return (
    <div className="photo-list__fav-icon">
      <div 
        className="photo-list__fav-icon-svg"
        onClick={props.onClick}
      >
        {/* Insert React */}
        <FavIcon selected={props.isFavorite} />
      </div>
    </div>
  );
}

export default PhotoFavButton;