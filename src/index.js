import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App.js";
import registerServiceWorker from "./registerServiceWorker";
import { createStore, combineReducers, applyMiddleware } from "redux";
// Provider allows us to use redux within our react app
import { Provider } from "react-redux";
import logger from "redux-logger";
// Import saga middleware
import createSagaMiddleware from "redux-saga";
import { takeEvery } from "redux-saga/effects";

// Make sagas

import getMovies from "./sagas/getMovies";
import getGenres from "./sagas/getGenres";
import getMovieGenres from "./sagas/getMovieGenres";
import getAllMovieGenres from "./sagas/getAllMovieGenres";

// Create the rootSaga generator function
function* rootSaga() {
  yield takeEvery("GET_MOVIES", getMovies);
  yield takeEvery("GET_GENRES", getGenres);
  yield takeEvery("GET_MOVIE_GENRES", getMovieGenres);
  yield takeEvery("GET_ALL_MOVIE_GENRES", getAllMovieGenres);
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
  switch (action.type) {
    case "SET_MOVIES":
      return action.payload;
    default:
      return state;
  }
};

// Used to store the genres
const genres = (state = [], action) => {
  switch (action.type) {
    case "SET_GENRES":
      return action.payload;
    default:
      return state;
  }
};

// Used to store all movies and their genres
const movie_genres = (state = [], action) => {
  switch (action.type) {
    case "SET_MOVIE_GENRES":
      return action.payload;
    default:
      return state;
  }
};

// Used to store a selected movie's genres
const selected_movie_genres = (state = [], action) => {
  switch (action.type) {
    case "SET_SELECTED_MOVIE":
      return action.payload;
    default:
      return state;
  }
};

// Create one store that all components can use
const storeInstance = createStore(
  combineReducers({
    movies,
    genres,
    movie_genres,
    selected_movie_genres,
  }),
  // Add sagaMiddleware to our store
  applyMiddleware(sagaMiddleware, logger)
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
