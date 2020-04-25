import React from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
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

//  Import sagas
import getMovies from "./sagas/getMovies";
import getGenres from "./sagas/getGenres";
import getMovieGenres from "./sagas/getMovieGenres";
import getAllMovieGenres from "./sagas/getAllMovieGenres";

//  Import reducers

import movies from "./reducers/movies";
import genres from "./reducers/genres";
import movie_genres from "./reducers/movie_genres";
import selected_movie_genres from "./reducers/movie_genres";

// Create the rootSaga generator function
function* rootSaga() {
  yield takeEvery("GET_MOVIES", getMovies);
  yield takeEvery("GET_GENRES", getGenres);
  yield takeEvery("GET_MOVIE_GENRES", getMovieGenres);
  yield takeEvery("GET_ALL_MOVIE_GENRES", getAllMovieGenres);
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

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
