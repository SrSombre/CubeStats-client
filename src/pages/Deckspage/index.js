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
          <div className="p-3 border bg-dark" key={deck.deck.index}>
            <div key={deck.deck.id} className="border-bottom">
              <h1 className="text-white">{deck.deck.name}</h1>
              <div className="container" className="p-3 border bg-grey">
                <div className="row">
                  <div className="col">
                    <DeckChartCMC
                      zero={deck.cmc[0]}
                      one={deck.cmc[1]}
                      two={deck.cmc[2]}
                      three={deck.cmc[3]}
                      four={deck.cmc[4]}
                      five={deck.cmc[5]}
                      six={deck.cmc[6]}
                      seven={deck.cmc[7]}
                      eight={deck.cmc[8]}
                      nine={deck.cmc[9]}
                      ten={deck.cmc[10]}
                      eleven={deck.cmc[11]}
                      twelve={deck.cmc[12]}
                      thirteen={deck.cmc[13]}
                      fourteen={deck.cmc[14]}
                      fifteen={deck.cmc[15]}
                    />
                  </div>
                  <div className="col">
                    <DeckChartCSL
                      white={deck.stats["{W}"]}
                      blue={deck.stats["{U}"]}
                      black={deck.stats["{B}"]}
                      red={deck.stats["{R}"]}
                      green={deck.stats["{G}"]}
                    />
                  </div>
                </div>
              </div>

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
          </div>
        );
      })}
    </div>
  );
}
