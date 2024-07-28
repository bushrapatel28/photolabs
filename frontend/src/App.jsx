import React, {useState} from 'react';

import topics from "mocks/topics";
import photos from 'mocks/photos';
import HomeRoute from 'routes/HomeRoute';
import './App.scss';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [photoInfo, setPhotoInfo] = useState();
  const [favorites, setFavorites] = useState([]);
  const [displayModal, setDisplayModal] = useState(false);

  const selectPhoto = (selectedPhoto) => {
    setPhotoInfo(selectedPhoto);
  }

  const toggleFavorite = (photoId) => {
    const isFavorite = favorites.includes(photoId);
    let newFavs;

    if (isFavorite) {
      newFavs = favorites.filter(id => id !== photoId);
    } else {
      newFavs = [...favorites, photoId];
    }
    setFavorites(newFavs);
  }

  return (
    <div className="App">
      <HomeRoute 
        topics={topics} 
        photos={photos}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
        setDisplayModal={setDisplayModal}
        selectPhoto={selectPhoto}
      />
      {displayModal 
      && <PhotoDetailsModal 
            photoInfo={photoInfo}
            favorites={favorites}
            toggleFavorite={toggleFavorite}
            closeDisplayModal={setDisplayModal}
          />
      }
    </div>
  );
};

export default App;
