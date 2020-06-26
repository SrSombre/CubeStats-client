import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectToken } from "../../store/player/selectors";

export default function Homepage() {
  const token = useSelector(selectToken);

  return (
    <div>
      <h1>Homepage overview.</h1>
      {token ? (
        <Link to={`/playerstats`}>
          <button>See personal stats</button>
        </Link>
      ) : null}
      <Link to={`/cubestats`}>
        <button>See cube stats</button>
      </Link>
      {token ? (
        <Link to={`/draft`}>
          <button>Start draft!</button>
        </Link>
      ) : null}
    </div>
  );
}
