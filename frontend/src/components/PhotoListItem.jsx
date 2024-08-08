import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton"

const PhotoListItem = (props) => {
  const {
    id,
    location,
    urls,
    user
  } = props.photoData;
  /* Insert React */
  return (
    <React.Fragment>
      <div className="photo-list__item">
        <PhotoFavButton 
          photoId={id} 
          isFavorite={props.isFavorite} 
          onClick={props.toggleFavorite}
        />
        <img 
          src={urls.regular} 
          alt="Cover-Photo" 
          className="photo-list__image"
          onClick={props.onClick}
        />
        <div className="photo-list__user-details">
          <img src={user.profile} alt="Profile-Photo" className="photo-list__user-profile"/>
          <div className="photo-list__user-info">
            {user.username}
            <div className="photo-list__user-location">
              {location.country}, {location.city}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PhotoListItem;
