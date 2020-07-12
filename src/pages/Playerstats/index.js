import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDecksActiveUser } from "../../store/decks/actions";
import DeckChartCMC from "../../components/Charts/DeckChartCMC/index";
import DeckChartCSL from "../../components/Charts/DeckChartCSL";
import {
  selectUserDecks,
  selectUserDecksWhiteCount,
  selectUserDecksBlueCount,
  selectUserDecksBlackCount,
  selectUserDecksRedCount,
  selectUserDecksGreenCount,
  selectUserDeckCount,
} from "../../store/decks/selectors";
import TypeChart from "../../components/Charts/TypeChart";

export default function Playerstats() {
  const dispatch = useDispatch();
  const decks = useSelector(selectUserDecks);
  // const [mostDraftedColor, setMostDraftedColor] = useState("");
  // const [leastDraftedColor, setLeastDraftedColor] = useState("");
  const userDeckCount = useSelector(selectUserDeckCount);

  // const userWhiteCount = useSelector(selectUserDecksWhiteCount).reduce(
  //   (a, b) => a + b,
  //   0
  // );
  // const userBlueCount = useSelector(selectUserDecksBlueCount).reduce(
  //   (a, b) => a + b,
  //   0
  // );
  // const userBlackCount = useSelector(selectUserDecksBlackCount).reduce(
  //   (a, b) => a + b,
  //   0
  // );
  // const userRedCount = useSelector(selectUserDecksRedCount).reduce(
  //   (a, b) => a + b,
  //   0
  // );
  // const userGreenCount = useSelector(selectUserDecksGreenCount).reduce(
  //   (a, b) => a + b,
  //   0
  // );

  // const maxCountAll = Math.max(
  //   userWhiteCount,
  //   userBlueCount,
  //   userBlackCount,
  //   userRedCount,
  //   userGreenCount
  // );

  // const leastCountAll = Math.max(
  //   userWhiteCount,
  //   userBlueCount,
  //   userBlackCount,
  //   userRedCount,
  //   userGreenCount
  // );

  // function mostDraftedColorInCube() {
  //   if (maxCountAll === userWhiteCount) {
  //     setMostDraftedColor("White");
  //   }
  //   if (maxCountAll === userBlueCount) {
  //     setMostDraftedColor("Blue");
  //   }
  //   if (maxCountAll === userBlackCount) {
  //     setMostDraftedColor("Black");
  //   }
  //   if (maxCountAll === userRedCount) {
  //     setMostDraftedColor("Red");
  //   }
  //   if (maxCountAll === userGreenCount) {
  //     setMostDraftedColor("Green");
  //   }
  // }

  // function leastDraftedColorInCube() {
  //   if (leastCountAll === userWhiteCount) {
  //     setLeastDraftedColor("White");
  //   }
  //   if (leastCountAll === userBlueCount) {
  //     setLeastDraftedColor("Blue");
  //   }
  //   if (leastCountAll === userBlackCount) {
  //     setLeastDraftedColor("Black");
  //   }
  //   if (leastCountAll === userRedCount) {
  //     setLeastDraftedColor("Red");
  //   }
  //   if (leastCountAll === userGreenCount) {
  //     setLeastDraftedColor("Green");
  //   }
  // }

  useEffect(() => {
    dispatch(fetchDecksActiveUser());
  }, [dispatch]);

  if (!decks) {
    return [];
  }

  if (userDeckCount === undefined) {
    return [];
  }
  // if (!userBlueCount) {
  //   return [];
  // }

  return (
    <div>
      <h1>Player statistics will be shown here.</h1>
      <h3>Total decks drafted: {userDeckCount.length} </h3>
      {/* <h3>
        Most drafted color is {mostDraftedColor}, with {maxCountAll} cards
        total.
      </h3>
      <h3>
        Least drafted color is {leastDraftedColor}, with {leastCountAll} cards
        total.
      </h3> */}
      <div>
        <h1>These are your previously drafted decks</h1>
        {decks.map((deck) => {
          return (
            <div
              className="p-3 border bg-dark"
              key={`${deck.deck.name}_${deck.deck.id}`}
            >
              <div key={deck.deck.id} className="border-bottom">
                <h1 className="text-white">{deck.deck.name}</h1>
                <div className="container" className="p-3 border bg-dark">
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
                    <div className="col-sm">
                      <TypeChart
                        artifact={deck.type.artifact}
                        creature={deck.type.creature}
                        land={deck.type.land}
                        enchantment={deck.type.enchantment}
                        planeswalker={deck.type.planeswalker}
                        sorcery={deck.type.sorcery}
                        instant={deck.type.instant}
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
    </div>
  );
}
