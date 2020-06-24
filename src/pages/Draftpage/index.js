import React from "react";
import CubeCardsVisual from "../../components/CubeCardsVisual";
import DraftedCards from "../../components/DraftedCards";

export default function Draftpage() {
  return (
    <div>
      <h1>This is the drafting page.</h1>

      <div>
        <h2>Drafted cards :</h2>
        <DraftedCards />
      </div>

      <div>
        <h2>All cards in this cube:</h2>
        <CubeCardsVisual />
      </div>
    </div>
  );
}
