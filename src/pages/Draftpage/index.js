import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
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
  const [name, setName] = useState("");

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
    if (name === "") {
      dispatch(
        showMessageWithTimeout(
          "danger",
          true,
          `Please name your deck before saving`
        )
      );
    } else {
      // dispatch(storeDeck(event.target.value)) &&
      console.log(draftedCards, name);
      dispatch(
        showMessageWithTimeout(
          "success",
          true,
          `Saved deck "${name}". Happy drafting!`
        )
      );
    }
  }

  return (
    <div>
      <h1>This is the drafting page.</h1>
      <Container>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Deck name</Form.Label>
          <Form.Control
            value={name}
            onChange={(event) => setName(event.target.value)}
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
        {draftedCards.map((card, index) => {
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
