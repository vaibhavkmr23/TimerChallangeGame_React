import { useState } from "react";

export default function TimerChallange({ title, targetTime }) {
  const [timerExpired, setTimerExpired] = useState(false);
  const [timerStarted, setTimerStarted] = useState(false);

  function handleStart() {
    setTimeout(() => {
      setTimerExpired(true);
    }, targetTime * 1000);
    setTimerStarted(true);
  }

  function handleStop(){
    
  }
  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timerExpired && <p>You Lost..</p>}
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button onClick={handleStart}>
          {timerStarted ? "Stop Challenge" : "Start Challenge"}
        </button>
      </p>
      <p className={timerStarted ? "active" : undefined}>
        {timerStarted?"Timer Running..": "Inactive.."}
      </p>
    </section>
  );
}
