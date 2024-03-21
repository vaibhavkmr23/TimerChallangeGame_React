import { useState } from "react";

export default function Player() {
  const [playerName, setPlayerName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    setSubmitted(false)
    setPlayerName(event.target.value);
  }
  function handleClick() {
    setSubmitted(true);
  }
  // const []
  return (
    <section id="player">
      <h2>Welcome {submitted ? playerName: "set Player"}</h2>
      <p>
        <input type="text" onChange={handleChange} value={playerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
