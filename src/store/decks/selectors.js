export const selectDecks = (state) => state.decks;
export const calculateDeckColors = (state) => {
  if (!state.decks) return;
  state.decks.reduce((stats, deck) => {
    console.log("THis is a deck", deck.cards);
    deck.cards.map((card) => {
      console.log("COLORS", card.colors);
    });
  }, {});

  // .reduce()

  // {"{W}": 0, "{U}": 0,"{B}": 0,"{R}": 0,"{G}": 0}

  // console.log(state.decks);
};
