import React from "react";
import { FormCheck } from "react-bootstrap";

export default function CubeCardsVisual() {
  return (
    <div>
      <h4>Show selection: (selected = show cards. unselected = hide cards)</h4>
      Blue: <FormCheck />
      Black: <FormCheck />
      Green: <FormCheck />
      Red: <FormCheck />
      White: <FormCheck />
      Multi: <FormCheck />
      Colorless: <FormCheck />
      Land: <FormCheck />
      <h3>
        <img
          src="https://img.scryfall.com/cards/small/front/2/3/2398892d-28e9-4009-81ec-0d544af79d2b.jpg?1562902119"
          alt="blabla"
        />
        <img
          src="https://img.scryfall.com/cards/small/front/e/3/e3285e6b-3e79-4d7c-bf96-d920f973b122.jpg?1562442158"
          alt="blabla"
        />
        <img
          src="https://img.scryfall.com/cards/small/front/9/5/95f27eeb-6f14-4db3-adb9-9be5ed76b34b.jpg?1562438559"
          alt="blabla"
        />
        <img
          src="https://img.scryfall.com/cards/small/front/0/6/06ec9e8b-4bd8-4caf-a559-6514b7ab4ca4.jpg?1557576917"
          alt="blabla"
        />
        <img
          src="https://img.scryfall.com/cards/small/front/0/f/0ff82aba-9022-4eff-a6dc-67365360d646.jpg?1561771079"
          alt="blabla"
        />
      </h3>
    </div>
  );
}
