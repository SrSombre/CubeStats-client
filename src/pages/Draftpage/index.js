import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { selectPlayer } from "../../store/player/selectors";
import { selectToken } from "../../store/player/selectors";
import { fetchCubeCards } from "../../store/cubeCards/actions";
import { fetchCard } from "../../store/draftedCards/actions";
import { undoCard } from "../../store/draftedCards/actions";
import { selectCubeCards } from "../../store/cubeCards/selectors";
import { selectDraftedCards } from "../../store/draftedCards/selectors";
import { showMessageWithTimeout } from "../../store/appState/actions";

export default function Draftpage() {
  const dispatch = useDispatch();
  const cube = useSelector(selectCubeCards);
  const draftedCardsTotal = useSelector(selectDraftedCards);
  const amountDraftedCards = draftedCardsTotal.length;
  const [deckName, setDeckName] = useState("");
  const player = useSelector(selectPlayer);
  const token = useSelector(selectToken);
  const [draftedCards, setDraftedCards] = useState(draftedCardsTotal);
  // const [playerName, setPlayerName] = useState(player.name);

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

  function filterWhite() {
    const whiteFilter = draftedCards.filter((card) => {
      if (card.colors === "{W}") return card;
    });

    setDraftedCards(whiteFilter);
  }

  function filterBlue() {
    const blueFilter = draftedCards.filter((card) => {
      if (card.colors === "{U}") return card;
    });

    setDraftedCards(blueFilter);
  }

  function filterBlack() {
    const blackFilter = draftedCards.filter((card) => {
      if (card.colors === "{B}") return card;
    });

    setDraftedCards(blackFilter);
  }
  function filterRed() {
    const redFilter = draftedCards.filter((card) => {
      if (card.colors === "{R}") return card;
    });

    setDraftedCards(redFilter);
  }
  function filterGreen() {
    const greenFilter = draftedCards.filter((card) => {
      if (card.colors === "{G}") return card;
    });

    setDraftedCards(greenFilter);
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
            <Button variant="primary" type="submit" onClick={filterWhite}>
              Filter white
            </Button>
            <Button variant="primary" type="submit" onClick={filterBlue}>
              Filter blue
            </Button>
            <Button variant="primary" type="submit" onClick={filterBlack}>
              Filter black
            </Button>
            <Button variant="primary" type="submit" onClick={filterRed}>
              Filter red
            </Button>
            <Button variant="primary" type="submit" onClick={filterGreen}>
              Filter green
            </Button>
          </Form.Group>
        </Container>

        {draftedCards.map((card) => {
          return (
            <img
              src={card.image}
              key={card.id}
              alt={card.name}
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
              onClick={addCard}
            />
          );
        })}
      </div>
    </div>
  );
}
