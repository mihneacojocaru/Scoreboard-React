import React, { useState, useEffect } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [timeOn, setTimeOn] = useState(false);

  useEffect(() => {
    let interval = null;

    if (timeOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timeOn]);

  return (
    <div className="app-header__stopwatch">
      <p>Stopwatch</p>
      <p className="app-header__stopwatch-display">{time}</p>
      <div className="app-header__stopwatch-buttons">
        {!timeOn ? (
          <button onClick={() => setTimeOn(true)}>Start</button>
        ) : (
          <button onClick={() => setTimeOn(false)}>Stop</button>
        )}
        <button onClick={() => setTime(0)}>Reset</button>
      </div>
    </div>
  );
};

export default Stopwatch;
