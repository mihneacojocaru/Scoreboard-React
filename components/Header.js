import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";

import Stats from "./Stats";
import Stopwatch from "./Stopwatch";

const Header = ({ players }) => {
  return (
    <div className="app-header">
      <Stats players={players} />
      <h1>
        <FontAwesomeIcon icon={faTrophy} className="best-crown" /> SCOREBOARD
      </h1>
      <Stopwatch />
    </div>
  );
};

export default Header;