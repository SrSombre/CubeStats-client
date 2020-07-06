export const selectCubeCards = (state) => state.cubeCards;

export const selectWhiteCubeCards = (state) =>
  state.cubeCards.filter((card) => {
    return card.colors === "{W}";
  });

export const selectBlueCubeCards = (state) =>
  state.cubeCards.filter((card) => {
    return card.colors === "{U}";
  });

export const selectBlackCubeCards = (state) =>
  state.cubeCards.filter((card) => {
    return card.colors === "{B}";
  });

export const selectRedCubeCards = (state) =>
  state.cubeCards.filter((card) => {
    return card.colors === "{R}";
  });

export const selectGreenCubeCards = (state) =>
  state.cubeCards.filter((card) => {
    return card.colors === "{G}";
  });
