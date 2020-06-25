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
    </div>
  );
}
