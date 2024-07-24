import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import './App.scss';

const sampleDataForPhotoListItem = {
  id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
};

// Note: Rendering a single component to build components in isolation
const App = () => {
  const photos = new Array(3);
  for (let i = 0; i < photos.length; i++) {
    photos[i] = sampleDataForPhotoListItem;
  }

  const photoList = photos.map((photoData, index) => {
    return (
      <li key={index}>
        <PhotoListItem photoData={photoData}/>
      </li>
    )
  });

  return (
    <div className="App">
      <ul>
        {photoList}
      </ul>
    </div>
  );
};

export default App;
