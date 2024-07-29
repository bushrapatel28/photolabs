import React, {useState} from 'react';

import topics from "mocks/topics";
import photos from 'mocks/photos';
import HomeRoute from 'routes/HomeRoute';
import './App.scss';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData, { ACTIONS } from 'hooks/useApplicationData';


// Note: Rendering a single component to build components in isolation
const App = () => {

  const { 
    state:{photoInfo, favorites, displayModal},
    onPhotoSelect,
    toggleFavorite,
    closeDisplayModal
  } = useApplicationData(); 

  return (
    <div className="App">
      <HomeRoute 
        topics={topics} 
        photos={photos}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
        onPhotoSelect={onPhotoSelect}
      />
      {displayModal 
      && <PhotoDetailsModal 
            photoInfo={photoInfo}
            favorites={favorites}
            toggleFavorite={toggleFavorite}
            onClick={() => closeDisplayModal()}
          />
      }
    </div>
  );
};

export default App;
