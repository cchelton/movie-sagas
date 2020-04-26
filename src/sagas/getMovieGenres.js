import axios from "axios";
import { put } from "redux-saga/effects";

/**
 * Selects a movie, returns its genres and details.
 * @param {*} action payload is the movie's id
 */
function* getMovieGenres(action) {
  const response = yield axios.get(`api/movieGenres/?id=${action.payload}`);
  yield put({ type: "SET_SELECTED_MOVIE", payload: response.data });
}

export default getMovieGenres;
