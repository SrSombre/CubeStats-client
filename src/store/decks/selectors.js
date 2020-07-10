export const selectDecks = (state) => state.decks;

export const selectTotalDecksCount = (state) =>
  state.decks[0].map((deck) => {
    return deck.id;
  });

export const selectDecksWhiteCount = (state) =>
  state.decks[0].map((deck) => {
    if (deck.stats["{W}"] >= 0) {
      return deck.stats["{W}"];
    }
  });

export const selectDecksBlueCount = (state) =>
  state.decks[0].map((deck) => {
    if (deck.stats["{U}"] >= 0) {
      return deck.stats["{U}"];
    }
  });

export const selectDecksBlackCount = (state) =>
  state.decks[0].map((deck) => {
    if (deck.stats["{B}"] >= 0) {
      return deck.stats["{B}"];
    }
  });

export const selectDecksRedCount = (state) =>
  state.decks[0].map((deck) => {
    if (deck.stats["{R}"] >= 0) {
      return deck.stats["{R}"];
    }
  });

export const selectDecksGreenCount = (state) =>
  state.decks[0].map((deck) => {
    if (deck.stats["{G}"] >= 0) {
      return deck.stats["{G}"];
    }
  });

export const selectUserDecksWhiteCount = (state) =>
  state.decks.player.map((deck) => {
    if (deck.stats["{W}"] >= 0) {
      return deck.stats["{W}"];
    }
  });
export const selectUserDecksBlueCount = (state) =>
  state.decks.player.map((deck) => {
    if (deck.stats["{U}"] >= 0) {
      return deck.stats["{U}"];
    }
  });
export const selectUserDecksBlackCount = (state) =>
  state.decks.player.map((deck) => {
    if (deck.stats["{B}"] >= 0) {
      return deck.stats["{B}"];
    }
  });
export const selectUserDecksRedCount = (state) =>
  state.decks.player.map((deck) => {
    if (deck.stats["{R}"] >= 0) {
      return deck.stats["{R}"];
    }
  });
export const selectUserDecksGreenCount = (state) =>
  state.decks.player.map((deck) => {
    if (deck.stats["{G}"] >= 0) {
      return deck.stats["{G}"];
    }
  });

export const selectUserDecks = (state) => state.decks.player;

export const selectUserDeckCount = (state) => state.decks.player;
