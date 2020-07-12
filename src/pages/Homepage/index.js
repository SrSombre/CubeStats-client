import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectToken } from "../../store/player/selectors";

export default function Homepage() {
  const token = useSelector(selectToken);

  return (
    <div>
      <h3>
        This app was developed for avid cube groups for the card game Magic: the
        Gathering.
      </h3>
      <p className="font-italic">
        Since a lot of effort is put into creating a cube with a balanced and
        level playing field, it is tough to gather real statistics from the past
        games. This app will bring more insights into the statistics of a cube,
        along with insights for the player.
      </p>

      <p>The flow for a user is fairly simple:</p>

      <p>
        - For each card drafted in real life, a player must select the card in
        the drafting section.
      </p>
      <p>
        - After completing the draft, a player will then save his or her deck to
        the database.
      </p>
      <p>
        - Insights are made dynamically with graphs for converted manacost,
        spell type count, and color count.
      </p>

      <p>
        As a last feature a lifecounter has been added to make lifecounters
        (usually in the form of d20's) obsolete. Opponents can be added here as
        well to allow for multiplayer games as well.
      </p>
      {token ? (
        <Link to={`/playerstats`}>
          <button>See personal stats</button>
        </Link>
      ) : null}
      <Link to={`/cubestats`}>
        <button>See cube stats</button>
      </Link>
      {token ? (
        <Link to={`/playerstats`}>
          <button>See personal stats!</button>
        </Link>
      ) : null}
      {token ? (
        <Link to={`/draft`}>
          <button>Start draft!</button>
        </Link>
      ) : null}
    </div>
  );
}
