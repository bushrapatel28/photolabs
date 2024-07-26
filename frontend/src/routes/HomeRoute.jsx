import React, {useState} from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = (props) => {
  const [favorites, setFavorites] = useState([]);
  const toggleFavorites = (id) => {
    setFavorites((favorites) => favorites = [id, ...favorites]);
  }

  return (
    <div className="home-route">
      {/* Insert React */}
      <TopNavigation topics={props.topics} favorites={favorites}/>
      <PhotoList photos={props.photos} favorites={favorites} toggleFavorites={toggleFavorites}/>
    </div>
  );
};

export default HomeRoute;
