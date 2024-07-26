import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";
import photos from "mocks/photos";

const PhotoList = ({photos}) => {
  return (
    <ul className="photo-list">
      {/* Insert React */}
      {photos.map((photoData) => {
        return (
          <PhotoListItem 
            key={photoData.id}
            photoData={photoData}
          />
        );
      })}
    </ul>
  );
};

export default PhotoList;
