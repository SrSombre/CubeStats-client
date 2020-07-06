import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import ToggleButton from "react-bootstrap/ToggleButton";
import { selectPlayer } from "../../store/player/selectors";
import { selectToken } from "../../store/player/selectors";
import { fetchCubeCards } from "../../store/cubeCards/actions";
import { fetchCard } from "../../store/draftedCards/actions";
import { undoCard } from "../../store/draftedCards/actions";
import { selectCubeCards } from "../../store/cubeCards/selectors";
import { selectDraftedCards } from "../../store/draftedCards/selectors";
import { showMessageWithTimeout } from "../../store/appState/actions";

import { selectWhiteDraftedCards } from "../../store/draftedCards/selectors";
import { selectBlueDraftedCards } from "../../store/draftedCards/selectors";
import { selectBlackDraftedCards } from "../../store/draftedCards/selectors";
import { selectRedDraftedCards } from "../../store/draftedCards/selectors";
import { selectGreenDraftedCards } from "../../store/draftedCards/selectors";

import { selectWhiteCubeCards } from "../../store/cubeCards/selectors";
import { selectBlueCubeCards } from "../../store/cubeCards/selectors";
import { selectBlackCubeCards } from "../../store/cubeCards/selectors";
import { selectRedCubeCards } from "../../store/cubeCards/selectors";
import { selectGreenCubeCards } from "../../store/cubeCards/selectors";

export default function Draftpage() {
  const dispatch = useDispatch();

  const cube = useSelector(selectCubeCards);

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
  const player = useSelector(selectPlayer);
  const token = useSelector(selectToken);

  const [draftedCards, setDraftedCards] = useState(draftedTotal);
  const [cubeCards, setCubeCards] = useState(cube);

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
      // dispatch(storeDeck(event.target.value)) &&
      console.log(draftedCards, deckName, player.name);
      dispatch(
        showMessageWithTimeout(
          "success",
          true,
          `Saved deck "${deckName}". Happy drafting!`
        )
      );
    }
  }

  return (
    <div>
      <h1>This is the drafting page.</h1>

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
          <Button variant="primary" type="submit" onClick={saveDeck}>
            Save deck
          </Button>
        </Form.Group>
      </Container>

      <div>
        <h2>Drafted cards :</h2>
        <Container>
          <Form.Group className="mt-5">
            <ToggleButton
              type="checkbox"
              variant="secondary"
              value="{W}"
              data-toggle="toggle"
              onChange={(e) => setDraftedCards(draftedWhite)}
            >
              White
            </ToggleButton>
            <ToggleButton
              type="checkbox"
              variant="secondary"
              value="{U}"
              data-toggle="toggle"
              onChange={(e) => setDraftedCards(draftedBlue)}
            >
              Blue
            </ToggleButton>

            <ToggleButton
              type="checkbox"
              variant="secondary"
              value="{U}"
              data-toggle="toggle"
              onChange={(e) => setDraftedCards(draftedBlack)}
            >
              Black
            </ToggleButton>

            <ToggleButton
              type="checkbox"
              variant="secondary"
              value="{U}"
              data-toggle="toggle"
              onChange={(e) => setDraftedCards(draftedRed)}
            >
              Red
            </ToggleButton>

            <ToggleButton
              type="checkbox"
              variant="secondary"
              value="{U}"
              data-toggle="toggle"
              onChange={(e) => setDraftedCards(draftedGreen)}
            >
              Green
            </ToggleButton>

            <ToggleButton
              type="checkbox"
              variant="secondary"
              value="all"
              data-toggle="toggle"
              onChange={(e) => setDraftedCards(draftedTotal)}
            >
              All
            </ToggleButton>
          </Form.Group>
        </Container>

        {draftedCards.map((card) => {
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
              type="checkbox"
              variant="secondary"
              value="{W}"
              data-toggle="toggle"
              onChange={(e) => setCubeCards(cubeWhite)}
            >
              White
            </ToggleButton>
            <ToggleButton
              type="checkbox"
              variant="secondary"
              value="{U}"
              data-toggle="toggle"
              onChange={(e) => setCubeCards(cubeBlue)}
            >
              Blue
            </ToggleButton>

            <ToggleButton
              type="checkbox"
              variant="secondary"
              value="{U}"
              data-toggle="toggle"
              onChange={(e) => setCubeCards(cubeBlack)}
            >
              Black
            </ToggleButton>

            <ToggleButton
              type="checkbox"
              variant="secondary"
              value="{U}"
              data-toggle="toggle"
              onChange={(e) => setCubeCards(cubeRed)}
            >
              Red
            </ToggleButton>

            <ToggleButton
              type="checkbox"
              variant="secondary"
              value="{U}"
              data-toggle="toggle"
              onChange={(e) => setCubeCards(cubeGreen)}
            >
              Green
            </ToggleButton>

            <ToggleButton
              type="checkbox"
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
