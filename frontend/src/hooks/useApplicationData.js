import React, {useState, useReducer} from 'react';

export const ACTIONS = {
  FAV_PHOTO_ADDED: "FAV_PHOTO_ADDED",
  FAV_PHOTO_REMOVED: "FAV_PHOTO_REMOVED",
  SET_PHOTO_DATA: "SET_PHOTO_DATA",
  SET_TOPIC_DATA: "SET_TOPIC_DATA",
  SELECT_PHOTO: "SELECT_PHOTO",
  DISPLAY_PHOTO_DETAILS: "DISPLAY_PHOTO_DETAILS"
}

function reducer(state, action) {
  switch (action.type) {
    case FAV_PHOTO_ADDED: 
      return state.favorites = [...favorites, action.photoId];
    case FAV_PHOTO_REMOVED: 
      return state.favorites = favorites.filter(id => id !== action.photoId);
    case SET_PHOTO_DATA: 
      return state.photoInfo = action.selectedPhoto;
    case SET_TOPIC_DATA: 
      return "";
    case SELECT_PHOTO: 
      return "";
    case DISPLAY_PHOTO_DETAILS: 
      return state.displayModal = true;
    default: 
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      )
  }
}

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, {photoInfo, favorites, displayModal});

  // const [photoInfo, setPhotoInfo] = useState();
  // const [favorites, setFavorites] = useState([]);
  // const [displayModal, setDisplayModal] = useState(false);

  // const toggleFavorite = (photoId) => {
  //   const isFavorite = favorites.includes(photoId);
  //   let newFavs;

  //   if (isFavorite) {
  //     newFavs = favorites.filter(id => id !== photoId);
  //   } else {
  //     newFavs = [...favorites, photoId];
  //   }
  //   setFavorites(newFavs);
  // }

  // const onPhotoSelect = (selectedPhoto) => {   
  //   setDisplayModal(true);
  //   setPhotoInfo(selectedPhoto);
  // }

  // const closeDisplayModal = () => {
  //   setDisplayModal(false);
  // }

  return {
    state: {photoInfo,
    favorites,
    displayModal},
    // toggleFavorite,
    // onPhotoSelect,
    // closeDisplayModal
  };
}

export default useApplicationData;