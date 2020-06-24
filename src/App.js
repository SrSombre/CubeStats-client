import React, { useEffect } from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Loading from "./components/Loading";
import MessageBox from "./components/MessageBox";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

import { useDispatch, useSelector } from "react-redux";
import { selectAppLoading } from "./store/appState/selectors";
import { getPlayerWithStoredToken } from "./store/player/actions";
import { Jumbotron } from "react-bootstrap";
import Homepage from "./pages/Homepage";
import Draftpage from "./pages/Draftpage";
import Cubestats from "./pages/Cubestats";
import Playerstats from "./pages/Playerstats";
import Lifecounter from "./pages/Lifecounter";

const Home = () => (
  <Jumbotron>
    <h1>Home</h1>
    <Homepage />
  </Jumbotron>
);
const Cube = () => (
  <Jumbotron>
    <Cubestats />
  </Jumbotron>
);
const Player = () => (
  <Jumbotron>
    <Playerstats />
  </Jumbotron>
);
const Draft = () => (
  <Jumbotron>
    <Draftpage />
  </Jumbotron>
);
const Life = () => (
  <Jumbotron>
    <Lifecounter />
  </Jumbotron>
);

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAppLoading);

  useEffect(() => {
    dispatch(getPlayerWithStoredToken());
  }, [dispatch]);

  return (
    <div className="App">
      <Navigation />
      <MessageBox />
      {isLoading ? <Loading /> : null}
      <Switch>
        <Route exact path="/" component={Home} />

        <Route path="/playerstats" component={Player} />
        <Route path="/cubestats" component={Cube} />
        <Route path="/draft" component={Draft} />
        <Route path="/lifecounter" component={Life} />

        <Route path="/signup" component={SignUp} />

        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
