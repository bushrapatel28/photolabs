# react-photolabs

The PhotoLabs project for the Web Development React course programming.

# Photolabs

PhotoLabs is a React-based single-page application (SPA) that allows users to view photos in different contexts. We will use a pre-existing API to build a frontend user experience for users to interact with photos!

Users can view a list of various photos on the home page along with a list of photo categories to select from in the navigation bar. Users can click on a photo to view a larger version of the photo and relevant / similar photos. They can like any photo(s) and can view a notification on the heart icon in the navigation if there are any liked photos.

## Setup

Note that two different servers will be running during development:

1. Client-side Webpack development server and
2. API server to provide photo data

Install dependencies with `npm install` in each respective `/frontend` and `/backend`.

## [Frontend] Running Webpack Development Server

```sh
cd frontend
npm start
```

## [Backend] Running Backend Server

Read `backend/readme` for further setup details.

```sh
cd backend
npm start
```

## Components Checklist

- [x] `FavBadge.jsx`
- [x] `FavIcon.jsx`
- [x] `PhotoFavButton.jsx`
- [x] `PhotoList.jsx`
- [x] `PhotoListItem.jsx`
- [x] `TopicList.jsx`
- [x] `TopicListItem.jsx`
- [x] `TopNavigationBar.jsx`

## Routes

- `HomeRoute.jsx`: 
  - Returns XML which renders the Top Navigation Bar and the Photo List components.

- `PhotoDetailsModal.jsx`: 
  - Returns XML which renders the Photo Fav Button and the Photo List of similar photos on the Display Modal.


## Custom Hooks

- `useApplicationData.js`: Uses the `useEffect` React hook to fetch the data from the API using a fetch request. It also uses the `useReducer` React hook to set the state of the components as required.

