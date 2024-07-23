import React from "react";

import "../styles/PhotoListItem.scss";


const PhotoListItem = (props) => {
  /* Insert React */
  return (
    <>
      <h1>Photo List</h1>
      <img src={props.sampleDataForPhotoListItem.imageSource} alt="Image-1" />
      <img src={props.sampleDataForPhotoListItem.profile} alt="Image-2" />
      <p>{props.sampleDataForPhotoListItem.username}</p>
      <p>{props.sampleDataForPhotoListItem.location.country}, {props.sampleDataForPhotoListItem.location.city}</p>
    </>
  );
};

export default PhotoListItem;
