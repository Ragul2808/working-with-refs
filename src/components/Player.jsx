import React, { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef(null); // Initialize useRef with null
  const [enteredPlayerName, setEnteredPlayerName] = useState(null);

  function handleChange(event) {
    setEnteredPlayerName(null); // Clear enteredPlayerName on input change
  }

  function handleClick() {
    setEnteredPlayerName(playerName.current.value);
    playerName.current.value = ''; // Clear input field after setting enteredPlayerName
  }

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName || 'unknown entity'}</h2>
      <p>
        <input
          ref={playerName}
          type="text"
          onChange={handleChange}
        />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
