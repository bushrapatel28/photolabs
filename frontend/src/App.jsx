import React from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';


// Note: Rendering a single component to build components in isolation
const App = () => {

  const { 
    state:{selectedPhoto, favorites, displayModal, photoData, topicData},
    onPhotoSelect,
    toggleFavorite,
    closeDisplayModal,
    onTopicSelect
  } = useApplicationData(); 

  return (
    <div className="App">
      <HomeRoute 
        topics={topicData} 
        photos={photoData}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
        onPhotoSelect={onPhotoSelect}
        onTopicSelect={onTopicSelect}
      />
      {displayModal 
      && <PhotoDetailsModal 
            selectedPhoto={selectedPhoto}
            favorites={favorites}
            toggleFavorite={toggleFavorite}
            onClick={() => closeDisplayModal()}
          />
      }
    </div>
  );
};

export default App;
