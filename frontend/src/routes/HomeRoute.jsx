import React, {useState} from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = (props) => {
  const [isFavPhoto, setIsFavPhoto] = useState(false);
  const favoritePhoto = () => {
    setIsFavPhoto((isFavPhoto) => isFavPhoto ? false : true);
  }

  return (
    <div className="home-route">
      {/* Insert React */}
      <TopNavigation topics={props.topics} isFavPhoto={isFavPhoto}/>
      <PhotoList photos={props.photos} isFavPhoto={isFavPhoto} favoritePhoto={favoritePhoto}/>
    </div>
  );
};

export default HomeRoute;
