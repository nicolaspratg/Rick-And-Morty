import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions";
const initialState = {
  myFavorites: [],
  allCharacters: [],
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: action.payload,
        allCharacters: action.payload,
      };
    case REMOVE_FAV:
      return { ...state, myFavorites: action.payload };
    case FILTER:
      if (action.payload === "all") {
        return {
          ...state,
          myFavorites: [...state.allCharacters],
        };
      } else {
        return {
          ...state,
          myFavorites: state.allCharacters.filter(
            (fav) => fav.gender === action.payload
          ),
        };
      }
    case ORDER:
    case "ORDER":
      return {
        ...state,
        myFavorites: [...state.allCharacters].sort((a, d) => {
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
