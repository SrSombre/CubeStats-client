import { apiUrl } from "../../config/constants";
import axios from "axios";
import {
  appLoading,
  appDoneLoading,
  //   showMessageWithTimeout,
} from "../appState/actions";

export const FETCH_DECKS_SUCCESS = "FETCH_DECKS_SUCCESS";

export const fetchDecksSuccess = (decks) => ({
  type: FETCH_DECKS_SUCCESS,
  payload: decks,
});

export const fetchDecks = () => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    const response = await axios.get(`${apiUrl}/decks`);
    console.log(response);
    dispatch(fetchDecksSuccess(response.data));
    dispatch(appDoneLoading());
  };
};
