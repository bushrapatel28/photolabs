import React from "react";

import "../styles/PhotoListItem.scss";


const PhotoListItem = (props) => {
  /* Insert React */
  return (
    <React.Fragment>
      <div className="photo-list__item">
        <img src={props.sampleDataForPhotoListItem.imageSource} alt="Cover-Photo" className="photo-list__image"/>
        <div className="photo-list__user-details">
          <img src={props.sampleDataForPhotoListItem.profile} alt="Profile-Photo" className="photo-list__user-profile"/>
          <div className="photo-list__user-info">
            {props.sampleDataForPhotoListItem.username}
            <div className="photo-list__user-location">
              {props.sampleDataForPhotoListItem.location.country}, {props.sampleDataForPhotoListItem.location.city}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PhotoListItem;
