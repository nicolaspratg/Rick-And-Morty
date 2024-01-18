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
        myFavorites: [...state.myFavorites, action.payload],
        allCharacters: [...state.allCharacters, action.payload],
      };
    case REMOVE_FAV:
      const updatedFavorites = state.myFavorites.filter(
        (character) => character.id !== action.payload
      );
      return {
        ...state,
        myFavorites: updatedFavorites,
        allCharacters: updatedFavorites,
      };
    case FILTER:
      const filteredCharacters = state.allCharacters.filter(
        (character) => character.gender === action.payload
      );

      return {
        ...state,
        myFavorites: filteredCharacters,
        filteredGender: action.payload,
      };
    case ORDER:
      const orderedFavorites = [...state.myFavorites];

      if (action.payload === "A") {
        orderedFavorites.sort((a, b) => a.id - b.id);
      } else if (action.payload === "D") {
        orderedFavorites.sort((a, b) => b.id - a.id);
      }

      return {
        ...state,
        myFavorites: orderedFavorites,
        sortOrder: action.payload,
      };

    default:
      return state;
  }
};

export default rootReducer;
