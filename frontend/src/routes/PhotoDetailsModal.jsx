import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';

const PhotoDetailsModal = (props) => {
  const {
    id,
    location,
    urls,
    user,
  } = props.photoData;

  const similarPhotosArray = Object.values(props.photoData.similar_photos);
  console.log("Array", similarPhotosArray);
  console.log("PhotoData in Modal", props.photoData);
  return (
    <div className="photo-details-modal">
      <button 
        className="photo-details-modal__close-button"
        onClick={() => props.closeDisplayModal(false)}  
      >
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className='photo-details-modal__top-bar'>
        <img 
          src={urls.regular} 
          alt="Enlarged-Photo" 
          className='photo-details-modal__image'
        />
      </div>
      <div className='photo-details-modal__photographer-details'>
        <img src={user.profile} alt="Profile-Photo" className="photo-details-modal__photographer-profile"/>
        <div className='photo-details-modal__photographer-info'>
          {user.username}
          <div className='photo-details-modal__photographer-location'>
            {location.country}, {location.city}
          </div>
        </div>
      </div>
      <div className='photo-details-modal__header'>
        Similar Photos
      </div>
      <div className='photo-details-modal__images'>
        <PhotoList photos={similarPhotosArray}/>
      </div>
    </div>
  )
};

export default PhotoDetailsModal;
