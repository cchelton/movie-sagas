import axios from "axios";
import { put } from "redux-saga/effects";

/**
 * Gets all the genres from the database
 */
function* getGenres() {
  try {
    const response = yield axios.get("/api/movies/");
    yield put({ type: "SET_GENRES", payload: response.data });
  } catch (err) {
    yield console.warn("err @getGenres*:", err);
  }
}

export default getGenres;
