import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import ToggleButton from "react-bootstrap/ToggleButton";
import { selectToken } from "../../store/player/selectors";
import { fetchCubeCards } from "../../store/cubeCards/actions";
import { fetchCard } from "../../store/draftedCards/actions";
import { undoCard } from "../../store/draftedCards/actions";
import { selectCubeCards } from "../../store/cubeCards/selectors";
import {
  selectDraftedCards,
  selectDraftedCardsId,
} from "../../store/draftedCards/selectors";
import { showMessageWithTimeout } from "../../store/appState/actions";
import { storeDeck } from "../../store/decks/actions";

import {
  selectWhiteDraftedCards,
  selectBlueDraftedCards,
  selectBlackDraftedCards,
  selectRedDraftedCards,
  selectGreenDraftedCards,
} from "../../store/draftedCards/selectors";

import {
  selectWhiteCubeCards,
  selectBlueCubeCards,
  selectBlackCubeCards,
  selectRedCubeCards,
  selectGreenCubeCards,
} from "../../store/cubeCards/selectors";

export default function Draftpage() {
  const dispatch = useDispatch();

  const cube = useSelector(selectCubeCards);
  const draftedCardIds = useSelector(selectDraftedCardsId);

  const cubeWhite = useSelector(selectWhiteCubeCards);
  const cubeBlue = useSelector(selectBlueCubeCards);
  const cubeBlack = useSelector(selectBlackCubeCards);
  const cubeRed = useSelector(selectRedCubeCards);
  const cubeGreen = useSelector(selectGreenCubeCards);

  const draftedTotal = useSelector(selectDraftedCards);
  const draftedWhite = useSelector(selectWhiteDraftedCards);
  const draftedBlue = useSelector(selectBlueDraftedCards);
  const draftedBlack = useSelector(selectBlackDraftedCards);
  const draftedRed = useSelector(selectRedDraftedCards);
  const draftedGreen = useSelector(selectGreenDraftedCards);
  const amountDraftedCards = draftedTotal.length;

  const [deckName, setDeckName] = useState("");

  const token = useSelector(selectToken);

  const [draftedCards, setDraftedCards] = useState(draftedTotal);

  const sortedDraftedCards = draftedCards.sort(function (a, b) {
    return a.cmc - b.cmc;
  });
  const [cubeCards, setCubeCards] = useState(cube);

  useEffect(() => {
    dispatch(fetchCubeCards());
  }, [dispatch]);

  function addCard(event) {
    amountDraftedCards <= 44
      ? dispatch(fetchCard(event.target.id)) &&
        setDraftedCards(draftedTotal) &&
        dispatch(
          showMessageWithTimeout(
            "success",
            true,
            `Added ${event.target.name}, pick no. ${
              amountDraftedCards + 1
            } to draftpool.`
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

  function saveDeck(event) {
    if (deckName === "") {
      dispatch(
        showMessageWithTimeout(
          "danger",
          true,
          `Please name your deck before saving`
        )
      );
    } else if (!token) {
      dispatch(
        showMessageWithTimeout(
          "danger",
          true,
          `Please log in to save your deck`
        )
      );
    } else {
      dispatch(storeDeck(deckName, draftedCardIds)) &&
        dispatch(
          showMessageWithTimeout(
            "success",
            true,
            `Saved deck "${deckName}". Good luck!`
          )
        );
    }
  }

  return (
    <div>
      <h1>This is the drafting page.</h1>
      <h4>Select your cards and save your deck afterwards</h4>

      <Container>
        <Form.Group controlId="formDeckName">
          <Form.Label />
          <Form.Control
            value={deckName}
            onChange={(event) => setDeckName(event.target.value)}
            type="name"
            placeholder="Deck name"
            required
          />
        </Form.Group>
        <Form.Group className="mt-5">
          <Button
            variant="primary"
            type="submit"
            value={draftedCardIds}
            onClick={saveDeck}
          >
            Save deck
          </Button>
        </Form.Group>
      </Container>

      <div>
        <h2>Drafted cards:</h2>
        <h4>{amountDraftedCards} total</h4>
        <Container type="radio">
          <Form.Group className="mt-5">
            <ToggleButton
              type="radio"
              variant="secondary"
              value="{W}"
              data-toggle="toggle"
              onChange={(e) => setDraftedCards(draftedWhite)}
            >
              White
            </ToggleButton>
            <ToggleButton
              type="radio"
              variant="secondary"
              value="{U}"
              data-toggle="toggle"
              onChange={(e) => setDraftedCards(draftedBlue)}
            >
              Blue
            </ToggleButton>

            <ToggleButton
              type="radio"
              variant="secondary"
              value="{B}"
              data-toggle="toggle"
              onChange={(e) => setDraftedCards(draftedBlack)}
            >
              Black
            </ToggleButton>

            <ToggleButton
              type="radio"
              variant="secondary"
              value="{R}"
              data-toggle="toggle"
              onChange={(e) => setDraftedCards(draftedRed)}
            >
              Red
            </ToggleButton>

            <ToggleButton
              type="radio"
              variant="secondary"
              value="{G}"
              data-toggle="toggle"
              onChange={(e) => setDraftedCards(draftedGreen)}
            >
              Green
            </ToggleButton>

            <ToggleButton
              type="radio"
              variant="secondary"
              value="all"
              data-toggle="toggle"
              onChange={(e) => setDraftedCards(draftedTotal)}
            >
              All
            </ToggleButton>
          </Form.Group>
        </Container>

        {sortedDraftedCards.map((card) => {
          return (
            <img
              src={card.image}
              key={card.id}
              alt={card.name}
              id={card.id}
              name={card.name}
              colors={card.colors}
              onClick={removeCard}
            />
          );
        })}
      </div>

      <div>
        <h2>All cards in this cube:</h2>

        <Container>
          <Form.Group className="mt-5">
            <ToggleButton
              type="radio"
              variant="secondary"
              value="{W}"
              data-toggle="toggle"
              onChange={(e) => setCubeCards(cubeWhite)}
            >
              White
            </ToggleButton>
            <ToggleButton
              type="radio"
              variant="secondary"
              value="{U}"
              data-toggle="toggle"
              onChange={(e) => setCubeCards(cubeBlue)}
            >
              Blue
            </ToggleButton>

            <ToggleButton
              type="radio"
              variant="secondary"
              value="{U}"
              data-toggle="toggle"
              onChange={(e) => setCubeCards(cubeBlack)}
            >
              Black
            </ToggleButton>

            <ToggleButton
              type="radio"
              variant="secondary"
              value="{U}"
              data-toggle="toggle"
              onChange={(e) => setCubeCards(cubeRed)}
            >
              Red
            </ToggleButton>

            <ToggleButton
              type="radio"
              variant="secondary"
              value="{U}"
              data-toggle="toggle"
              onChange={(e) => setCubeCards(cubeGreen)}
            >
              Green
            </ToggleButton>

            <ToggleButton
              type="radio"
              variant="secondary"
              value="all"
              data-toggle="toggle"
              onChange={(e) => setCubeCards(cube)}
            >
              All
            </ToggleButton>
          </Form.Group>
        </Container>

        {cubeCards.map((card) => {
          return (
            <img
              src={card.image}
              key={card.id}
              alt={card.name}
              id={card.id}
              name={card.name}
              colors={card.colors}
              onClick={addCard}
            />
          );
        })}
      </div>
    </div>
  );
}
