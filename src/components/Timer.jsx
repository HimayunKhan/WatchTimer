import React, { useRef, useState } from "react";

function Timer() {
  const [count, setCount] = useState(0);
  const time = useRef(null);

  function playtimer() {
    if (time.current !== null) return;
    time.current = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
  }

  function stoptimer() {
    clearInterval(time.current);
    time.current = null;
  }

  function resettimer() {
    stoptimer();
    setCount(0);
  }
  return (
    <div>
      <h2>Timer:{count}</h2>
      <button onClick={playtimer}>play</button>
      <button onClick={stoptimer}>stop</button>
      <button onClick={resettimer}>reset</button>
    </div>
  );
}

export default Timer;
