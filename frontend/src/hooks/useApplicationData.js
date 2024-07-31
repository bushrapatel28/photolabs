import App from 'App';
import React, { useReducer, useEffect } from 'react';

export const ACTIONS = {
  FAV_PHOTO_ADDED: "FAV_PHOTO_ADDED",
  FAV_PHOTO_REMOVED: "FAV_PHOTO_REMOVED",
  SET_PHOTO_DATA: "SET_PHOTO_DATA",
  SET_TOPIC_DATA: "SET_TOPIC_DATA",
  SELECT_PHOTO: "SELECT_PHOTO",
  DISPLAY_PHOTO_DETAILS: "DISPLAY_PHOTO_DETAILS",
  CLOSE_PHOTO_DETAILS: "CLOSE_PHOTO_DETAILS",
  GET_PHOTOS_BY_TOPICS: "GET_PHOTOS_BY_TOPICS"
}

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return {...state, favorites: action.payload};
    case ACTIONS.FAV_PHOTO_REMOVED:
      return {...state, favorites: action.payload};
    case ACTIONS.SET_PHOTO_DATA:
      return {...state, photoData: action.payload};
    case ACTIONS.SET_TOPIC_DATA: 
      return {...state, topicData: action.payload};
    case ACTIONS.SELECT_PHOTO:
      return {...state, selectedPhoto: action.payload};
    case ACTIONS.DISPLAY_PHOTO_DETAILS:
      return {...state, displayModal: true};
    case ACTIONS.CLOSE_PHOTO_DETAILS:
      return {...state, displayModal: false};
    case ACTIONS.GET_PHOTOS_BY_TOPICS:
      return {...state, photoData: action.payload};
    default: 
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      )
  }
}

const initialState = {
  selectedPhoto: null, 
  favorites: [], 
  displayModal: false,
  photoData: [],
  topicData: []
}

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch('/api/photos')
      .then(res => res.json())
      .then(data => dispatch({type: ACTIONS.SET_PHOTO_DATA, payload: data}));

    fetch('/api/topics')
      .then(res => res.json())
      .then(data => dispatch({type: ACTIONS.SET_TOPIC_DATA, payload: data}));
  }, []);

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
    dispatch({type, payload: newFavs});
  }

  const onPhotoSelect = (selectedPhoto) => {   
    dispatch({type: ACTIONS.SELECT_PHOTO, payload: selectedPhoto});
    dispatch({type: ACTIONS.DISPLAY_PHOTO_DETAILS});
  }

  
  const onTopicSelect = (topicId) => {
    fetch(`/api/topics/photos/${topicId}`)
      .then(res => res.json())
      .then(data => dispatch({type: ACTIONS.GET_PHOTOS_BY_TOPICS, payload: data}))
  }

  const closeDisplayModal = () => {
    dispatch({type: ACTIONS.CLOSE_PHOTO_DETAILS});
  }

  return {
    state,
    toggleFavorite,
    onPhotoSelect,
    closeDisplayModal,
    onTopicSelect
  };
}

export default useApplicationData;