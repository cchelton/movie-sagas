import axios from "axios";
import { put } from "redux-saga/effects";

/**
 * Gets all the movies from the database
 */
function* getMovies() {
  try {
    const response = yield axios.get("/api/movies/");
    yield put({ type: "SET_MOVIES", payload: response.data });
  } catch (err) {
    yield console.warn("err @getMovies*:", err);
  }
}

export default getMovies;
