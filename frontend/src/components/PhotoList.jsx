import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";
import photos from "mocks/photos";

const PhotoList = ({photos, favorites, toggleFavorite}) => {
  return (
    <ul className="photo-list">
      {/* Insert React */}
      {photos.map((photoData) => {
        return (
          <PhotoListItem 
            key={photoData.id}
            photoData={photoData}
            isFavorite={favorites.includes(photoData.id)}
            toggleFavorite={() => toggleFavorite(photoData.id)}
          />
        );
      })}
    </ul>
  );
};

export default PhotoList;
