import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCubeCards } from "../../store/cubeCards/actions";
import { fetchCard } from "../../store/draftedCards/actions";
import { undoCard } from "../../store/draftedCards/actions";
import { selectCubeCards } from "../../store/cubeCards/selectors";
import { selectDraftedCards } from "../../store/draftedCards/selectors";
import { showMessageWithTimeout } from "../../store/appState/actions";

export default function Draftpage() {
  const dispatch = useDispatch();
  const cube = useSelector(selectCubeCards);
  const draftedCards = useSelector(selectDraftedCards);
  const amountDraftedCards = draftedCards.length;

  useEffect(() => {
    dispatch(fetchCubeCards());
  }, [dispatch]);

  function addCard(event) {
    amountDraftedCards <= 44
      ? dispatch(fetchCard(event.target.id)) &&
        dispatch(
          showMessageWithTimeout(
            "success",
            true,
            `Card no. ${amountDraftedCards + 1} added to draft selection`
          )
        )
      : dispatch(
          showMessageWithTimeout(
            "danger",
            true,
            `You already have ${amountDraftedCards} cards selected.`
          )
        );
  }

  function removeCard(event) {
    dispatch(undoCard(event.target.id)) &&
      dispatch(
        showMessageWithTimeout(
          "success",
          true,
          `Removed ${event.target.name} from draft selection`
        )
      );
  }

  return (
    <div>
      <h1>This is the drafting page.</h1>

      <div>
        <h2>Drafted cards :</h2>
        {draftedCards.map((card) => {
          return (
            <img
              src={card.image}
              key={card.id}
              alt={card.name}
              cmc={card.cmc}
              colors={card.colors}
              createdat={card.createdAt}
              id={card.id}
              image={card.image}
              keywords={card.keywords}
              multiverse_id={card.multiverse_id}
              name={card.name}
              power={card.power}
              rarity={card.rarity}
              rulings_uri={card.rulings_uri}
              scryfall_uri={card.scryfall_uri}
              setname={card.setName}
              toughness={card.toughness}
              type={card.type}
              updatedat={card.updatedAt}
              onClick={removeCard}
            />
          );
        })}
      </div>

      <div>
        <h2>All cards in this cube:</h2>
        {cube.map((card) => {
          return (
            <img
              src={card.image}
              key={card.id}
              alt={card.name}
              cmc={card.cmc}
              colors={card.colors}
              createdat={card.createdAt}
              id={card.id}
              image={card.image}
              keywords={card.keywords}
              multiverse_id={card.multiverse_id}
              name={card.name}
              power={card.power}
              rarity={card.rarity}
              rulings_uri={card.rulings_uri}
              scryfall_uri={card.scryfall_uri}
              setname={card.setName}
              toughness={card.toughness}
              type={card.type}
              updatedat={card.updatedAt}
              onClick={addCard}
            />
          );
        })}
      </div>
    </div>
  );
}

// event.preventDefault();
// if (amountDraftedCards === 45) {
//   dispatch(
//     showMessageMaxDraftPoolWithTimeout(
// "danger",
// true,
// `You already have ${amountDraftedCards} cards selected.`
//     )
//   );
// } else if
