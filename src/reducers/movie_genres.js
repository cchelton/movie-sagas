/**
 * Used to store all movies and their genres.
 */
const movie_genres = (state = [], action) => {
  switch (action.type) {
    case "SET_MOVIE_GENRES":
      return action.payload;
    default:
      return state;
  }
};

export default movie_genres;
