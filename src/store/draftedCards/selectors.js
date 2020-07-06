export const selectDraftedCards = (state) => state.draftedCards;

export const selectWhiteDraftedCards = (state) =>
  state.draftedCards.filter((card) => {
    return card.colors === "{W}";
  });

export const selectBlueDraftedCards = (state) =>
  state.draftedCards.filter((card) => {
    return card.colors === "{U}";
  });

export const selectBlackDraftedCards = (state) =>
  state.draftedCards.filter((card) => {
    return card.colors === "{B}";
  });

export const selectRedDraftedCards = (state) =>
  state.draftedCards.filter((card) => {
    return card.colors === "{R}";
  });

export const selectGreenDraftedCards = (state) =>
  state.draftedCards.filter((card) => {
    return card.colors === "{G}";
  });
