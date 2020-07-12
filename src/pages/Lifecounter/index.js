import React, { useState } from "react";
import Player from "../../components/Lifecounter/Player";
import AddPlayerForm from "../../components/Lifecounter/AddPlayerForm";

export default function Lifecounter() {
  const [players, setPlayers] = useState([
    { id: 1, name: "You", lifetotal: 20 },
    { id: 2, name: "Opponent", lifetotal: 20 },
  ]);

  function changeLifetotal(id, changeBy) {
    const updatedPlayers = players.map((player) => {
      if (player.id === id) {
        return {
          id: player.id,
          name: player.name,
          lifetotal: player.lifetotal + changeBy,
        };
      }
      return player;
    });
    setPlayers(updatedPlayers);
  }

  function addPlayer(name) {
    const newPlayer = {
      id: players.length + 1,
      name: name,
      lifetotal: 20,
    };
    const updatedPlayers = [...players, newPlayer];
    setPlayers(updatedPlayers);
  }

  function resetButton(event) {
    const resetPlayers = [
      { id: 1, name: "You", lifetotal: 20 },
      { id: 2, name: "Opponent", lifetotal: 20 },
    ];

    setPlayers(resetPlayers);
  }
  return (
    <div className="lifecounter">
      <h1>Lifecounter</h1>
      <button onClick={resetButton}>Reset players</button>
      <AddPlayerForm addPlayer={addPlayer} />
      {players.map((player) => {
        return (
          <Player
            key={player.id}
            changeLifetotal={changeLifetotal}
            id={player.id}
            name={player.name}
            lifetotal={player.lifetotal}
          />
        );
      })}
    </div>
  );
}
