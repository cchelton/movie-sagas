import axios from "axios";
import { put } from "redux-saga/effects";

/**
 *  Edits a movie's title/description in database.
 * @param {*} action expected action.payload = { id: movieID, body: { title: "Scott Pilgrim", description: "lorem ipsum" } }
 */
function* editMovie(action) {
  const movieID = action.payload.id;
  const editObj = action.payload.body;
  yield axios.put(`api/movies/edit/?id=${movieID}`, editObj);
  yield put({ type: "GET_MOVIE_GENRES", payload: movieID });
}

export default editMovie;
