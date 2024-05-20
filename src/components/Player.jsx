import React, { useState, useRef} from "react";

export default function Player() {
  const playerName = useRef
  const [enteredPlayerName, setEnteredPlayerName] = useState('');
  

  function handleChange(event) {
    setSubmitted(false);
    setEnteredPlayerName(event.target.value);
  }

  function handleClick() {
   setEnteredPlayerName(playerName.current.value);
  }

  return (
    <section id="player">
      <h2>Welcome {  enteredPlayerName ?? 'unknown entity' }</h2>
      <p>
        <input 
        ref={playerName}
        type="text" 
        onChange={handleChange} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
