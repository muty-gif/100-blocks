import { useState } from "react";
import { loadStartTime, saveStartTime, clearStartTime } from "./lib/storage";
import { useTimeEngine } from "./hooks/useTimeEngine";
import Grid from "./components/Grid";
import Header from "./components/Header";
import Controls from "./components/Controls";

export default function App() {
  const [startTime, setStartTime] = useState(loadStartTime());

  const state = useTimeEngine(startTime);

  const startDay = () => {
    const now = Date.now();
    saveStartTime(now);
    setStartTime(now);
  };

  const resetDay = () => {
    if (!confirm("Reset day?")) return;
    clearStartTime();
    setStartTime(null);
  };

  return (
    <div>
    <Header state={state} startTime={startTime} />

      {!startTime ? (
        <button onClick={startDay}>Start My Day</button>
      ) : (
        <>
          <Grid state={state} />
          <Controls onReset={resetDay} />
        </>
      )}
    </div>
  );
}