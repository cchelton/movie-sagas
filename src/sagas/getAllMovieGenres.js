import axios from "axios";
import { put } from "redux-saga/effects";

function* getAllMovieGenres() {
  const response = yield axios.get("/api/movieGenres/");
  yield put({ type: "SET_MOVIE_GENRES", payload: response });
}

export default getAllMovieGenres;
