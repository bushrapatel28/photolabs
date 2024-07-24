import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
  const [favorite, setFavorite] = useState(false);

  const handleClick = () => {
    setFavorite(favorite ? false : true);
  }

  return (
    <div className="photo-list__fav-icon">
      <div 
        className="photo-list__fav-icon-svg"
        onClick={handleClick}
      >
        {/* Insert React */}
        <FavIcon selected={favorite}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;