import React, {useState} from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = (props) => {
  const {
    favorites, 
    topics,
    photos,
    toggleFavorite,
    onPhotoSelect
    } = props;

  // const openDisplayModal = (photoInfo) => {
  //   setDisplayModal(true);
  //   onPhotoSelect(photoInfo);
  // }
 
  return (
    <div className="home-route">
      {/* Insert React */}
      <TopNavigation 
        topics={topics} 
        favorites={favorites}
      />
      <PhotoList 
        photos={photos} 
        favorites={favorites} 
        toggleFavorite={toggleFavorite}
        onPhotoSelect={onPhotoSelect}
      />
    </div>
  );
};

export default HomeRoute;
