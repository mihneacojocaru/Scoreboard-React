import Head from 'next/head';
import { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrown, faClose } from "@fortawesome/free-solid-svg-icons";
import Header from "../components/Header.js";

export default function Home() {

  const [players, setPlayers] = useState([
    {
      name: "Jasper",
      points: 7,
      id: 1,
    },
    {
      name: "Ashley",
      points: 5,
      id: 2,
    },
    {
      name: "Charlotte",
      points: 3,
      id: 3,
    },
  ]);

  const [newplayer, setNewplayer] = useState("");
  const [highest, setHighest] = useState(0);

  useEffect(() => {
    getHighestScore();
  }, [players]);

  const addPlayer = (newPlayer = "NewPlayer") => {
    setPlayers((prev) => [
      ...prev,
      {
        name: newPlayer,
        points: 0,
        id: players.length + 1,
      },
    ]);
  };

  const removePlayer = (id) => {
    setPlayers(players.filter((e) => e.id !== id));
  };

  const getHighestScore = () => {
    let scores = [];

    players.forEach((e) => {
      scores.push(e.points);
    });

    setHighest(Math.max(...scores));
  };

  const scoreChange = (button, id) => {
    if (button === "+") {
      let points;
      players.forEach((e) => {
        if (e.id == id) {
          points = e.points + 1;
        }
      });
      setPlayers(players.map((el) => (el.id == id ? { ...el, points } : el)));
    } else if (button === "-") {
      let points;
      players.forEach((e) => {
        if (e.id == id) {
          points = e.points - 1;
        }
      });
      setPlayers(players.map((el) => (el.id == id ? { ...el, points } : el)));
    }
  };

  const actionFunctions = (e) => {
    let obj = e.target;
    if (obj.textContent === "+") {
      scoreChange("+", obj.id);
    } else if (obj.textContent === "-") {
      scoreChange("-", obj.id);
    } else if (obj.classList.contains("close")) {
      removePlayer(parseInt(obj.id));
    } else if (obj.classList.contains("new-player")) {
      setNewplayer(obj.value);
    } else if (obj.type == "submit") {
      newplayer != "" && addPlayer(newplayer);
      setNewplayer("");
      obj.parentElement.children[0].value = "";
    }
  };

  return (
    <div>
      <Head>
      <link rel="shortcut icon" href="./favicon.svg" type="image/svg+xml"/>
        <title>Scoreboard React App</title>
        <meta name="description" content="Scoreboard app created with Reac by Mihnea Cojocaru" />
      </Head>

      <div className="app">
      <div className="app-body">
        <Header players={players} />
        <div className="main__container" onClick={actionFunctions}>
          {players.map((item) =>
            item.points == highest ? (
              <div key={item.id}>
                <div className="main__container-player">
                  <FontAwesomeIcon
                    icon={faClose}
                    id={item.id}
                    className="main__container-player-icon close"
                  />
                  <FontAwesomeIcon
                    icon={faCrown}
                    className="main__container-player-icon crown best-crown"
                  />
                  <span className="main__container-player-name">
                    {item.name}
                  </span>
                  <div className="main__container-player-buttons">
                    <span id={item.id}>-</span>
                    <span className="score">{item.points}</span>
                    <span id={item.id}>+</span>
                  </div>
                </div>
              </div>
            ) : (
              <div key={item.id}>
                <div className="main__container-player">
                  <FontAwesomeIcon
                    icon={faClose}
                    id={item.id}
                    className="main__container-player-icon close"
                  />
                  <FontAwesomeIcon
                    icon={faCrown}
                    className="main__container-player-icon crown"
                  />
                  <span className="main__container-player-name">
                    {item.name}
                  </span>
                  <div className="main__container-player-buttons">
                    <span id={item.id}>-</span>
                    <span className="score">{item.points}</span>
                    <span id={item.id}>+</span>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
        <div className="add-player" onChange={actionFunctions}>
          <input
            className="new-player"
            type="text"
            placeholder="ENTER A PLAYERS NAME"
          />
          <button onClick={actionFunctions}>Add Player</button>
        </div>
      </div>
    </div>
    </div>
  )
}
