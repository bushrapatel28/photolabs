import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const [favorite, setFavorite] = useState(false);

  const handleClick = () => {
    // using prevState to avoid stale state - Same as setFavorite((prev) => prev ? false : true)
    setFavorite((favorite) => favorite ? false : true);
    favorite && props.favoritePhoto();
  }


  return (
    <div className="photo-list__fav-icon">
      <div 
        className="photo-list__fav-icon-svg"
        onClick={handleClick}
      >
        {/* Insert React */}
        <FavIcon selected={favorite} />
      </div>
    </div>
  );
}

export default PhotoFavButton;