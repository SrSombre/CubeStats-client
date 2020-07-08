import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDecks } from "../../store/decks/actions";
import { selectDecks } from "../../store/decks/selectors";
import DeckChartCMC from "../../components/Charts/DeckChartCMC/index";
import DeckChartCSL from "../../components/Charts/DeckChartCSL";

export default function Deckspage() {
  const dispatch = useDispatch();
  const decks = useSelector(selectDecks);

  useEffect(() => {
    dispatch(fetchDecks());
  }, [dispatch]);

  if (!decks[0]) {
    return [];
  }
  return (
    <div key={decks.index}>
      <h1>These are all the decks drafted with this cube</h1>
      {decks[0].map((deck) => {
        return (
          <div key={deck.deck.id}>
            <h1>{deck.deck.name}</h1>
            <DeckChartCMC
              white={deck.stats["{W}"]}
              blue={deck.stats["{U}"]}
              black={deck.stats["{B}"]}
              red={deck.stats["{R}"]}
              green={deck.stats["{G}"]}
            />
            <DeckChartCSL />
            {deck.deck.cards.map((card) => {
              return (
                <img
                  src={card.image}
                  alt={card.index}
                  key={`${deck.id}_${card.id}`}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
