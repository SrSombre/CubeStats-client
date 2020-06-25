import { FETCH_DRAFTED_CARD_SUCCESS } from "./actions";
import { REMOVE_DRAFTED_CARD_SUCCESS } from "./actions";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DRAFTED_CARD_SUCCESS:
      return [...state, { ...action.payload }];
    case REMOVE_DRAFTED_CARD_SUCCESS:
      return state.filter(({ id }) => id !== action.payload.id);

    default:
      return state;
  }
};
