import React from 'react';

// import PhotoListItem from './components/PhotoListItem';
import PhotoList from 'components/PhotoList';
import TopicList from 'components/TopicList';
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
      <TopicList />
      {/* {photoList} */}
      <PhotoList />
    </div>
  );
};

export default App;
