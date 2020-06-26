import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDecks } from "../../store/decks/actions";
import { selectDecks } from "../../store/decks/selectors";

export default function Deckspage() {
  const dispatch = useDispatch();
  const decks = useSelector(selectDecks);

  useEffect(() => {
    dispatch(fetchDecks());
  }, [dispatch]);

  return (
    <div>
      <h1>These are all the decks drafted with this cube</h1>
      {decks.map((deck) => {
        return (
          <div key={deck.id}>
            <h3>{deck.name}</h3>
            {deck.cards.map((card) => {
              return <img src={card.image} alt={card.index}></img>;
            })}
          </div>
        );
      })}
    </div>
  );
}
