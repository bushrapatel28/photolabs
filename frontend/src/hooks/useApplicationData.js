import React, { useReducer} from 'react';

export const ACTIONS = {
  FAV_PHOTO_ADDED: "FAV_PHOTO_ADDED",
  FAV_PHOTO_REMOVED: "FAV_PHOTO_REMOVED",
  SET_PHOTO_DATA: "SET_PHOTO_DATA",
  SET_TOPIC_DATA: "SET_TOPIC_DATA",
  SELECT_PHOTO: "SELECT_PHOTO",
  DISPLAY_PHOTO_DETAILS: "DISPLAY_PHOTO_DETAILS",
  CLOSE_PHOTO_DETAILS: "CLOSE_PHOTO_DETAILS"
}

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED: 
      return {...state, favorites: action.newFavs};
    case ACTIONS.FAV_PHOTO_REMOVED: 
      return {...state, favorites: action.newFavs};
    case ACTIONS.SET_PHOTO_DATA: 
      return {...state, photoInfo: action.selectedPhoto};
    case ACTIONS.SET_TOPIC_DATA: 
      return "";
    case ACTIONS.SELECT_PHOTO: 
      return "";
    case ACTIONS.DISPLAY_PHOTO_DETAILS: 
      return {...state, displayModal: true};
    case ACTIONS.CLOSE_PHOTO_DETAILS: 
      return {...state, displayModal: false};
    default: 
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      )
  }
}

const initialState = {
  photoInfo: null, 
  favorites: [], 
  displayModal: false
}

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // const [photoInfo, setPhotoInfo] = useState();
  // const [favorites, setFavorites] = useState([]);
  // const [displayModal, setDisplayModal] = useState(false);

  const toggleFavorite = (photoId) => {
    const isFavorite = state.favorites.includes(photoId);
    let newFavs, type;

    if (isFavorite) {
      newFavs = state.favorites.filter(id => id !== photoId);
      type = ACTIONS.FAV_PHOTO_REMOVED;
    } else {
      newFavs = [...state.favorites, photoId];
      type = ACTIONS.FAV_PHOTO_ADDED
    }
    dispatch({type, newFavs});
  }

  const onPhotoSelect = (selectedPhoto) => {   
    //setDisplayModal(true);
    dispatch({type: ACTIONS.DISPLAY_PHOTO_DETAILS});
    dispatch({type: ACTIONS.SET_PHOTO_DATA, selectedPhoto});

    //setPhotoInfo(selectedPhoto);
  }

  const closeDisplayModal = () => {
    // setDisplayModal(false);
    dispatch({type: ACTIONS.CLOSE_PHOTO_DETAILS});
  }

  return {
    state,
    toggleFavorite,
    onPhotoSelect,
    closeDisplayModal
  };
}

export default useApplicationData;