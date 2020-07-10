import React, { useState, useEffect } from "react";
import { fetchDecks } from "../../store/decks/actions";
import {
  selectDecks,
  selectTotalDecksCount,
  selectDecksWhiteCount,
  selectDecksBlueCount,
  selectDecksBlackCount,
  selectDecksRedCount,
  selectDecksGreenCount,
} from "../../store/decks/selectors";
import { useSelector, useDispatch } from "react-redux";
import DeckChartCMC from "../../components/Charts/DeckChartCMC/index";
import DeckChartCSL from "../../components/Charts/DeckChartCSL";

export default function Cubestats() {
  const dispatch = useDispatch();
  const decks = useSelector(selectDecks);
  const totalDecksCount = useSelector(selectTotalDecksCount);
  const [mostDraftedColor, setMostDraftedColor] = useState("");
  const [leastDraftedColor, setLeastDraftedColor] = useState("");

  const whiteCount = useSelector(selectDecksWhiteCount).reduce(
    (a, b) => a + b,
    0
  );
  const blueCount = useSelector(selectDecksBlueCount).reduce(
    (a, b) => a + b,
    0
  );
  const blackCount = useSelector(selectDecksBlackCount).reduce(
    (a, b) => a + b,
    0
  );
  const redCount = useSelector(selectDecksRedCount).reduce((a, b) => a + b, 0);
  const greenCount = useSelector(selectDecksGreenCount).reduce(
    (a, b) => a + b,
    0
  );

  const maxCountAll = Math.max(
    whiteCount,
    blueCount,
    blackCount,
    redCount,
    greenCount
  );

  function mostDraftedColorInCube() {
    if (maxCountAll === whiteCount) {
      setMostDraftedColor("White");
    }
    if (maxCountAll === blueCount) {
      setMostDraftedColor("Blue");
    }
    if (maxCountAll === blackCount) {
      setMostDraftedColor("Black");
    }
    if (maxCountAll === redCount) {
      setMostDraftedColor("Red");
    }
    if (maxCountAll === greenCount) {
      setMostDraftedColor("Green");
    }
  }

  const leastCountAll = Math.min(
    whiteCount,
    blueCount,
    blackCount,
    redCount,
    greenCount
  );

  function leastDraftedColorInCube() {
    if (leastCountAll === whiteCount) {
      setLeastDraftedColor("White");
    }
    if (leastCountAll === blueCount) {
      setLeastDraftedColor("Blue");
    }
    if (leastCountAll === blackCount) {
      setLeastDraftedColor("Black");
    }
    if (leastCountAll === redCount) {
      setLeastDraftedColor("Red");
    }
    if (leastCountAll === greenCount) {
      setLeastDraftedColor("Green");
    }
  }

  useEffect(() => {
    mostDraftedColorInCube();
    leastDraftedColorInCube();
    dispatch(fetchDecks());
  }, [dispatch]);

  if (!decks[0]) {
    return [];
  }
  // if (!whiteCount) {
  //   return [];
  // }
  // if (!blueCount) {
  //   return [];
  // }
  // if (!blackCount) {
  //   return [];
  // }
  // if (!redCount) {
  //   return [];
  // }
  // if (!greenCount) {
  //   return [];
  // }
  if (!totalDecksCount) {
    return [];
  }

  console.log("LENGTHdecks", totalDecksCount);
  return (
    <div>
      <h1>Cube data.</h1>

      <div>
        <h3>
          A total of {totalDecksCount.length} decks have been drafted with this
          cube.
        </h3>
        <h3>
          Most drafted color is {mostDraftedColor}, with {maxCountAll} cards
          total.
        </h3>

        <h3>
          Least drafted color is {leastDraftedColor}, with {leastCountAll} cards
          total.
        </h3>

        <div class="container" class="p-3 border bg-dark">
          <div class="row">
            <div class="col">
              <DeckChartCMC
                totalDecks={totalDecksCount}
                white={whiteCount}
                blue={blueCount}
                black={blackCount}
                red={redCount}
                green={greenCount}
              />
            </div>
            <div class="col">
              <DeckChartCSL
                white={whiteCount}
                blue={blueCount}
                black={blackCount}
                red={redCount}
                green={greenCount}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
