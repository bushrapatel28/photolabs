import React, {useState} from 'react';

import topics from "mocks/topics";
import photos from 'mocks/photos';
import HomeRoute from 'routes/HomeRoute';
import './App.scss';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [displayModal, setDisplayModal] = useState(false);

  return (
    <div className="App">
      <HomeRoute 
        topics={topics} 
        photos={photos} 
        setDisplayModal={setDisplayModal}
      />
      {displayModal && <PhotoDetailsModal setDisplayModal={setDisplayModal}/>}
    </div>
  );
};

export default App;
