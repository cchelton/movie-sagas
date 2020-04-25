import axios from "axios";
import { put } from "redux-saga/effects";

function* getMovieGenres(id) {
  const response = yield axios.get(`/movieGenres/${id}`);
  yield put({ type: "SET_MOVIE_GENRES", payload: response.data });
}

export default getMovieGenres;
