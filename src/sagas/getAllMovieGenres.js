import axios from "axios";
import { put } from "redux-saga/effects";

/**
 * Gets all movies and their genres
 */
function* getAllMovieGenres() {
  const response = yield axios.get("/api/movieGenres/");
  yield put({ type: "SET_MOVIE_GENRES", payload: response.data });
}

export default getAllMovieGenres;
