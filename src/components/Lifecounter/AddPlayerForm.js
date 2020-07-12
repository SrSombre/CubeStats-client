import React, { useState } from "react";

export default function AddPlayerForm(props) {
  const [newName, setNewName] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    props.addPlayer(newName);

    setNewName("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Add another player:
          <input
            value={newName}
            placeholder="player name"
            onChange={(event) => setNewName(event.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
