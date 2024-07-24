import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton"

const PhotoListItem = (props) => {
  /* Insert React */
  return (
    <React.Fragment>
      <div className="photo-list__item">
        <PhotoFavButton />
        <img src={props.photoData.imageSource} alt="Cover-Photo" className="photo-list__image"/>
        <div className="photo-list__user-details">
          <img src={props.photoData.profile} alt="Profile-Photo" className="photo-list__user-profile"/>
          <div className="photo-list__user-info">
            {props.photoData.username}
            <div className="photo-list__user-location">
              {props.photoData.location.country}, {props.photoData.location.city}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PhotoListItem;
