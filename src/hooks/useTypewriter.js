import { useState, useEffect } from "react";

// Types out a list of { type, text } lines one character at a time,
// pausing briefly between lines. Used for the terminal hero animation.
export function useTypewriter(lines, speed = 16) {
  const [output, setOutput] = useState([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let lineIdx = 0;
    let charIdx = 0;
    const current = [];
    let timer;

    function tick() {
      if (lineIdx >= lines.length) {
        setDone(true);
        return;
      }
      const line = lines[lineIdx];
      if (charIdx <= line.text.length) {
        const snapshot = [...current];
        snapshot[lineIdx] = { type: line.type, text: line.text.slice(0, charIdx) };
        setOutput(snapshot);
        charIdx++;
        timer = setTimeout(tick, speed);
      } else {
        current[lineIdx] = { type: line.type, text: line.text };
        lineIdx++;
        charIdx = 0;
        timer = setTimeout(tick, 220);
      }
    }

    tick();
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { output, done };
}
