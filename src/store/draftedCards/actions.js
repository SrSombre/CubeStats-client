import { apiUrl } from "../../config/constants";
import axios from "axios";
import {
  appLoading,
  appDoneLoading,
  // showMessageWithTimeout,
} from "../appState/actions";

export const FETCH_DRAFTED_CARD_SUCCESS = "FETCH_DRAFTED_CARD_SUCCESS";
export const REMOVE_DRAFTED_CARD_SUCCESS = "REMOVE_DRAFTED_CARD_SUCCESS";

export const fetchDraftedCardSuccess = (draftedCard) => ({
  type: FETCH_DRAFTED_CARD_SUCCESS,
  payload: draftedCard,
});

export const removeDraftedCardSuccess = (draftedCard) => ({
  type: REMOVE_DRAFTED_CARD_SUCCESS,
  payload: draftedCard,
});

export const fetchCard = (id) => {
  return async (dispatch, getState) => {
    dispatch(appLoading());

    const response = await axios.get(`${apiUrl}/cards/${id}`);

    dispatch(fetchDraftedCardSuccess(response.data));

    dispatch(appDoneLoading());
  };
};

export const undoCard = (id) => {
  return async (dispatch, getState) => {
    dispatch(appLoading());

    const response = await axios.get(`${apiUrl}/cards/${id}`);

    dispatch(removeDraftedCardSuccess(response.data));

    dispatch(appDoneLoading());
  };
};
