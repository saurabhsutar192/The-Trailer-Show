import { createStore } from "redux";

let initialState = {
  isSearched: false,
  isMovies: false,
  isTV: false,
  movieRes: [],
  tvRes: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "isSearched":
      return { ...state, isSearched: action.payload };

    case "setMovieRes":
      return {
        ...state,
        movieRes: action.payload,
        isMovies: true,
        isTV: false,
      };
    case "setTvRes":
      return { ...state, tvRes: action.payload, isMovies: false, isTV: true };
    default:
      return state;
  }
};

export let store = createStore(reducer);
