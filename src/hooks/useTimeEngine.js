import { useEffect, useState } from "react";
import { getBlockState } from "../lib/time";

export function useTimeEngine(startTime) {
  const [state, setState] = useState(
    startTime ? getBlockState(startTime) : null
  );

  useEffect(() => {
    if (!startTime) return;

    const update = () => {
      setState(getBlockState(startTime));
    };

    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, [startTime]);

  return state;
}