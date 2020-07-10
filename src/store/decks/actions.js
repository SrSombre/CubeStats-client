import { apiUrl } from "../../config/constants";
import axios from "axios";
import {
  appLoading,
  appDoneLoading,
  //   showMessageWithTimeout,
} from "../appState/actions";

export const FETCH_DECKS_SUCCESS = "FETCH_DECKS_SUCCESS";
export const FETCH_DECKS_ACTIVE_USER_SUCCESS =
  "FETCH_DECKS_ACTIVE_USER_SUCCESS";

export const SAVE_DECKS_SUCCESS = "SAVE_DECKS_SUCCESS";

export const fetchDecksSuccess = (decks) => ({
  type: FETCH_DECKS_SUCCESS,
  payload: decks,
});

export const fetchDecksActiveUserSuccess = (decks) => ({
  type: FETCH_DECKS_ACTIVE_USER_SUCCESS,
  payload: decks,
});

export const saveDecksSuccess = (decks) => ({
  type: SAVE_DECKS_SUCCESS,
  payload: decks,
});

export const fetchDecks = () => {
  return async (dispatch, getState) => {
    const { token } = getState().player;

    dispatch(appLoading());
    const response = await axios.get(`${apiUrl}/decks/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response);
    dispatch(fetchDecksSuccess(response.data));
    dispatch(appDoneLoading());
  };
};

//Fetch decks for active user: /decks/user/:userId

export const fetchDecksActiveUser = () => {
  return async (dispatch, getState) => {
    const { token } = getState().player;
    const userId = getState().player;

    dispatch(appLoading());
    const response = await axios.get(`${apiUrl}/decks/user/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response);
    dispatch(fetchDecksActiveUserSuccess(response.data));
    dispatch(appDoneLoading());
  };
};

export const storeDeck = (name, cardIds) => {
  return async (dispatch, getState) => {
    const { token } = getState().player;
    dispatch(appLoading());

    const response = await axios.post(
      `${apiUrl}/decks/`,
      {
        name: name,
        cardIds: cardIds,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log(response);
    dispatch(saveDecksSuccess(response.data));
    dispatch(appDoneLoading());
  };
};
