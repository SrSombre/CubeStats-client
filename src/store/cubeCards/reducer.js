import { FETCH_CUBE_CARDS_SUCCESS } from "./actions";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CUBE_CARDS_SUCCESS:
      return [...action.payload];

    default:
      return state;
  }
};
