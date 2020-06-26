import { combineReducers } from "redux";
import appState from "./appState/reducer";
import player from "./player/reducer";
import cubeCards from "./cubeCards/reducer";
import draftedCards from "./draftedCards/reducer";
import decks from "./decks/reducer";

export default combineReducers({
  appState,
  player,
  cubeCards,
  draftedCards,
  decks,
});
