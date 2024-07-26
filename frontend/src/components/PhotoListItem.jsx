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
        <PhotoFavButton isFavPhoto={props.isFavPhoto} favoritePhoto={props.favoritePhoto}/>
        <img src={urls.regular} alt="Cover-Photo" className="photo-list__image"/>
        {/* <img src={urls.full} alt="Enlarged-Photo" className="photo-list__image"/> */}
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
