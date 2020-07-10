import { FETCH_DECKS_SUCCESS } from "./actions";
import { FETCH_DECKS_ACTIVE_USER_SUCCESS } from "./actions";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DECKS_SUCCESS:
      return [action.payload];
    case FETCH_DECKS_ACTIVE_USER_SUCCESS:
      return { ...state, player: action.payload };

    default:
      return state;
  }
};
