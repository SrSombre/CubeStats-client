import { apiUrl } from "../../config/constants";
import axios from "axios";
import {
  appLoading,
  appDoneLoading,
  //   showMessageWithTimeout,
} from "../appState/actions";

export const FETCH_CUBE_CARDS_SUCCESS = "FETCH_CUBE_CARDS_SUCCESS";

export const fetchCubeCardsSuccess = (cubeCards) => ({
  type: FETCH_CUBE_CARDS_SUCCESS,
  payload: cubeCards,
});

export const fetchCubeCards = () => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    const response = await axios.get(`${apiUrl}/cards`);

    dispatch(fetchCubeCardsSuccess(response.data));
    dispatch(appDoneLoading());
  };
};
