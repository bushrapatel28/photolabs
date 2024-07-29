import React, {useState} from 'react';

const useApplicationData = () => {
  const [photoInfo, setPhotoInfo] = useState();
  const [favorites, setFavorites] = useState([]);
  const [displayModal, setDisplayModal] = useState(false);

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

  const onPhotoSelect = (selectedPhoto) => {   
    setDisplayModal((prev) => prev = true);
    setPhotoInfo((prev) => prev = selectedPhoto);
  }

  const closeDisplayModal = () => {
    setDisplayModal(false);
  }

  return {
    state: {photoInfo,
    favorites,
    displayModal},
    toggleFavorite,
    onPhotoSelect,
    closeDisplayModal
  };
}

export default useApplicationData;