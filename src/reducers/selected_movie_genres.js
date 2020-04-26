const initialState = {
  id: 0,
  genres: [],
  title: "",
  poster: "",
  description: "",
};
/**
 * Used to store a selected movie's genres.
 */
const selected_movie_genres = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SELECTED_MOVIE":
      return action.payload;
    case "UPDATE_SELECTED_MOVIE":
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default selected_movie_genres;
