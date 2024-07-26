import React from 'react';

// import PhotoListItem from './components/PhotoListItem';
import topics from "mocks/topics";
import photos from 'mocks/photos';
import HomeRoute from 'routes/HomeRoute';
import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {
  // const photos = new Array(3);
  // for (let i = 0; i < photos.length; i++) {
  //   photos[i] = sampleDataForPhotoListItem;
  // }

  // const photoList = photos.map((photoData, index) => {
  //   return (
  //     <PhotoListItem key={photoData.id + index} photoData={photoData}/>
  //   )
  // });

  return (
    <div className="App">
      <HomeRoute topics={topics} photos={photos} />
    </div>
  );
};

export default App;
