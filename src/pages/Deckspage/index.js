import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDecks } from "../../store/decks/actions";
import { selectDecks, calculateDeckColors } from "../../store/decks/selectors";
import DeckChart from "../../components/Charts/DeckChartCMC/index";
import DeckChartCSL from "../../components/Charts/DeckChartCSL";

export default function Deckspage() {
  const dispatch = useDispatch();
  const decks = useSelector(selectDecks);
  const stats = useSelector(calculateDeckColors);

  useEffect(() => {
    dispatch(fetchDecks());
  }, [dispatch]);

  console.log("WHATISSTATS", stats);

  // const [whiteCount, setWhiteCount] = useState(0);
  let whiteCount = [];
  return (
    <div>
      <h1>These are all the decks drafted with this cube</h1>
      {decks.map((deck) => {
        if (deck.cards.includes("{W}")) {
          // setWhiteCount(whiteCount + 1);
        }
        return (
          <div key={deck.id}>
            <h3>{deck.name}</h3>
            <h5>
              {deck.name} has {whiteCount.length} white cards.
            </h5>
            <div>
              <DeckChart />
              <DeckChartCSL />

              {deck.cards.map((card) => {
                if (card.colors.includes("{W}")) {
                  // setWhiteCount(whiteCount + 1);
                  //   console.log(
                  //     "THIS MANY WHITE CARDS",
                  //     whiteCount.length,
                  //     "IN THIS DECK",
                  //     deck.name
                  //   );
                }

                // console.log(
                //   "CREATURE?",
                //   card.type.includes("Creature"),
                //   card.name
                // );
                // console.log("BLACK COLOR", card.colors.includes("{B}"));
                // console.log(
                //   "WHITE COLOR",
                //   card.colors.includes("{W}"),
                //   card.name
                // );

                return (
                  <img
                    src={card.image}
                    alt={card.index}
                    key={`${deck.id}_${card.id}`}
                  ></img>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

// function colorPresence() {
//   const whiteFilter = draftedCards.filter((card) => {
//     if (card.colors === "{W}") return card;
//   });

//   setDraftedCards(whiteFilter);
// }
// function colorPresence() {
//   const whiteFilter = draftedCards.filter((card) => {
//     if (card.colors === "{W}") return card;
//   });

//   setDraftedCards(whiteFilter);
// }

// const white = cards.filter((card) => {
//   if (card.colors === "{W}") return card;
// });
// const blue = cards.filter((card) => {
//   if (card.colors === "{W}") return card;
// });
// const black = cards.filter((card) => {
//   if (card.colors === "{W}") return card;
// });
// const red = cards.filter((card) => {
//   if (card.colors === "{W}") return card;
// });
// const green = cards.filter((card) => {
//   if (card.colors === "{W}") return card;
// });
