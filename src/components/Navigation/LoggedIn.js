import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../store/player/actions";
import Button from "react-bootstrap/Button";
import { selectPlayer } from "../../store/player/selectors";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

export default function LoggedIn() {
  const dispatch = useDispatch();
  const player = useSelector(selectPlayer);
  return (
    <>
      <Nav.Item style={{ padding: ".5rem 1rem" }}>{player.email}</Nav.Item>
      <Link to="/">
        <Button onClick={() => dispatch(logOut())}>Logout</Button>
      </Link>
    </>
  );
}
