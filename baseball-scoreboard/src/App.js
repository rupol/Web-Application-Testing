import React, { useState } from "react";
import "./App.css";

function App() {
  const [balls, setBalls] = useState(0);
  const [strikes, setStrikes] = useState(0);
  const [hits, setHits] = useState(0);

  const ballSetter = event => {
    if (balls < 3 && strikes < 3) {
      setBalls(balls + 1);
    } else {
      setBalls(0);
      setStrikes(0);
    }
  };

  const strikeSetter = event => {
    if (balls < 4 && strikes < 2) {
      setStrikes(strikes + 1);
    } else {
      setBalls(0);
      setStrikes(0);
    }
  };

  const hitSetter = event => {
    setBalls(0);
    setStrikes(0);
  };

  const foulSetter = event => {
    if (strikes < 2) {
      setStrikes(strikes + 1);
    }
  };

  return (
    <div className="App">
      <h1>Scoreboard</h1>

      <div className="scoreboard">
        <div>
          <h2>Balls:</h2>
          <h3>{balls}</h3>
        </div>

        <div>
          <h2>Strikes:</h2>
          <h3>{strikes}</h3>
        </div>
      </div>

      <div className="dashboard">
        <button onClick={ballSetter}>Ball</button>
        <button onClick={strikeSetter}>Strike</button>
        <button onClick={hitSetter}>Hit</button>
        <button onClick={foulSetter}>Foul</button>
      </div>
    </div>
  );
}

export default App;
