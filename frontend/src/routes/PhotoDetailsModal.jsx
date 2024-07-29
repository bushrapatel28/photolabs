import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoDetailsModal = (props) => {
  const {
    id,
    location,
    urls,
    user,
  } = props.photoInfo;

  const similarPhotosArray = Object.values(props.photoInfo.similar_photos);


  return (
    <div className="photo-details-modal">
      <button 
        className="photo-details-modal__close-button"
        onClick={props.onClick}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
        
      <div className='photo-details-modal__images'>
        <PhotoFavButton 
          photoId={id} 
          isFavorite={props.favorites.includes(id)} 
          onClick={() => props.toggleFavorite(id)}
        />
        <img 
          src={urls.regular} 
          alt="Enlarged-Photo"
        />
        <div className='photo-details-modal__top-bar'>
          <div className='photo-details-modal__photographer-details'>
            <img src={user.profile} alt="Profile-Photo" className="photo-details-modal__photographer-profile"/>
            <div className='photo-details-modal__photographer-info'>
              {user.username} 
              <div className='photo-details-modal__photographer-location'>
                {location.country}, {location.city}
              </div>
            </div>
          </div>
        </div>

        <div className='photo-details-modal__header'>
          Similar Photos
        </div>
        <PhotoList 
          photos={similarPhotosArray}
          favorites={props.favorites}
          toggleFavorite={props.toggleFavorite}
          openDisplayModal={props.openDisplayModal}
        />
      </div>
    </div>
  )
};

export default PhotoDetailsModal;
