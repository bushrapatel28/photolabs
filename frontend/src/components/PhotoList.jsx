import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";


const PhotoList = (props) => {
  return (
    <ul className="photo-list">
      {/* Insert React */}
      {props.photos.map((photoData) => {
        return (
          <PhotoListItem 
            key={photoData.id}
            photoData={photoData}
            isFavorite={props.favorites.includes(photoData.id)}
            toggleFavorite={() => props.toggleFavorite(photoData.id)}
            onClick={() => {props.onPhotoSelect(photoData)}}
          />
        );
      })}
    </ul>
  );
};

export default PhotoList;
