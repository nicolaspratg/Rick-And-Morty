import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions";
const initialState = {
  myFavorites: [],
  favFilter: [],
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: action.payload,
        favFilter: action.payload,
      };
    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: action.payload,
        favFilter: action.payload,
      };
    case FILTER:
      if (action.payload === "all") {
        return {
          ...state,
          favFilter: [...state.myFavorites],
        };
      } else {
        return {
          ...state,
          favFilter: state.myFavorites.filter(
            (fav) => fav.gender === action.payload
          ),
        };
      }
    case ORDER:
      return {
        ...state,
        favFilter: [...state.favFilter].sort((a, d) => {
          if (action.payload === "A") {
            return a.id - d.id;
          }
          if (action.payload === "D") {
            return d.id - a.id;
          }
        }),
        myFavorites: [...state.myFavorites].sort((a, d) => {
          if (action.payload === "A") {
            return a.id - d.id;
          }
          if (action.payload === "D") {
            return d.id - a.id;
          }
        }),
      };
    default:
      return state;
  }
};

export default rootReducer;
