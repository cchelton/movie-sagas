/**
 * Used to store a selected movie's genres.
 */
const selected_movie_genres = (state = [], action) => {
  switch (action.type) {
    case "SET_SELECTED_MOVIE":
      return action.payload;
    default:
      return state;
  }
};

export default selected_movie_genres;
