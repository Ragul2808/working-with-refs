import React, { useState, useRef,  } from 'react';
import ResultModal from './ResultModal';

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();
  const [timerStarted, setTimerStarted] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

  if (timeRemaining <=0) {
    clearInterval(timer.current);
    
    dialog.current.open();
  }

  function handleReset(){
    setTimeRemaining(targetTime * 1000);
  }

  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 10);
    }, 10);

    setTimerStarted(true);
  }

  function handleStop() {
    clearInterval(timer.current);
    setTimerStarted(false);
    dialog.current.showModal();
  }

  return (
    <>
      <ResultModal ref={dialog} targetTime={targetTime} 
       remainingTime={timeRemaining} />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? 's' : ''}
        </p>
        <p>
          <button onClick={timerStarted ? handleStop : handleStart}>
            {timerStarted ? 'Stop' : 'Start'} challenge
          </button>
        </p>
        <p className={timerStarted ? 'active' : undefined}>
          {timerStarted ? 'Time is running...' : 'Timer inactive'}
        </p>
      </section>
    </>
  );
}
