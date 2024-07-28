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
    setDisplayModal, 
    selectPhoto} = props;

  const openDisplayModal = (photoInfo) => {
    setDisplayModal(true);
    selectPhoto(photoInfo);
  }

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
        openDisplayModal={openDisplayModal}
      />
    </div>
  );
};

export default HomeRoute;
