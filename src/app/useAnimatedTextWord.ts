"use client";

import { animate } from "framer-motion";
import { useEffect, useState } from "react";

let delimiter = " ";
export function useAnimatedTextWord(text: string) {
  let [cursor, setCursor] = useState(0);
  let [startingCursor, setStartingCursor] = useState(0);
  let [prevText, setPrevText] = useState(text);

  if (prevText !== text) {
    setPrevText(text);
    setStartingCursor(text.startsWith(prevText) ? cursor : 0);
  }

  useEffect(() => {
    let controls = animate(startingCursor, text.split(delimiter).length, {
      duration: 3,
      ease: "easeOut",
      onUpdate(latest) {
        setCursor(Math.floor(latest));
      },
    });

    return () => controls.stop();
  }, [startingCursor, text]);

  return text.split(delimiter).slice(0, cursor).join(delimiter);
}
