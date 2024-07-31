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
    onPhotoSelect,
    onTopicSelect
    } = props;
 
  return (
    <div className="home-route">
      {/* Insert React */}
      <TopNavigation 
        topics={topics} 
        favorites={favorites}
        onTopicSelect={onTopicSelect}
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
