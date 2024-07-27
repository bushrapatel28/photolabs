import React, {useState} from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = (props) => {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (photoId) => {
    const isFavorite = favorites.includes(photoId);
    let newFavs = undefined;

    if (isFavorite) {
      newFavs = favorites.filter(id => id !== photoId);
    } else {
      newFavs = [...favorites, photoId];
    }

    setFavorites(newFavs);
  }

  const openDisplayModal = (photoData) => {
    props.setDisplayModal(true);
    console.log(photoData);
  }

  return (
    <div className="home-route">
      {/* Insert React */}
      <TopNavigation 
        topics={props.topics} 
        favorites={favorites}
      />
      <PhotoList 
        photos={props.photos} 
        favorites={favorites} 
        toggleFavorite={toggleFavorite}
        openDisplayModal={openDisplayModal}
      />
    </div>
  );
};

export default HomeRoute;
