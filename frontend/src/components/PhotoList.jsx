import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";


const PhotoList = ({photos, favorites, toggleFavorite, openDisplayModal}) => {
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
            onClick={() => openDisplayModal(photoData)}
          />
        );
      })}
    </ul>
  );
};

export default PhotoList;
