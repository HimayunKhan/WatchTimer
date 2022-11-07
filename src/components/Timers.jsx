import React, { useEffect, useRef, useState } from "react";

export default function Timers() {
  const [count, setcount] = useState(0);

  const time = useRef(null);

  useEffect(() => {
    return timeStop;
  }, []);

  function timePlay() {
    if (time.current !== null) return;

    time.current = setInterval(() => {
      setcount((count) => count + 1);
    }, 1000);
    console.log("a");
  }

  function timeStop() {
    clearInterval(time.current);
    time.current = null;
    console.log("b");
  }

  function timeReset() {
    console.log("c");
    timeStop();
    setcount(0);
  }
  return (
    <div>
      <h2>Timer:{count}</h2>
      <button onClick={timePlay}>play</button>
      <button onClick={timeStop}>stop</button>
      <button onClick={timeReset}>reset</button>
    </div>
  );
}
