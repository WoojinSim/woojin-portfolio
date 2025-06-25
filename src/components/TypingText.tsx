/** @jsxImportSource @emotion/react */
import React, { useState, useEffect, useMemo, useCallback, useRef } from "react";

import * as styles from "./styles/TypingText.styles";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";

interface Props {
  texts: string[];
  staggerDuration?: number;
  rotationInterval?: number;
  loop?: boolean;
}
const TypingText = ({ texts, staggerDuration = 0.025, rotationInterval = 2500, loop = false }: Props) => {
  const TRANSITION = { type: "spring" as const, damping: 30, stiffness: 400 };
  const INITIAL = { y: "100%" };
  const ANIMATE = { y: 0 };
  const EXIT = { y: "-120%" };

  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const splitIntoCharacters = (text: string): string[] => {
    if (typeof Intl !== "undefined" && Intl.Segmenter) {
      const segmenter = new Intl.Segmenter("ko", { granularity: "grapheme" });
      return Array.from(segmenter.segment(text), (segment) => segment.segment);
    }
    return Array.from(text);
  };

  const elements = useMemo(() => {
    const currentText = texts[currentTextIndex];
    const words = currentText.split(" ");
    return words.map((word, i) => ({
      characters: splitIntoCharacters(word),
      needsSpace: i !== words.length - 1,
    }));
  }, [texts, currentTextIndex]);

  const getStaggerDelay = useCallback(
    (index: number) => {
      return index * staggerDuration;
    },
    [staggerDuration]
  );

  const next = useCallback(() => {
    const nextIndex = currentTextIndex === texts.length - 1 ? (loop ? 0 : currentTextIndex) : currentTextIndex + 1;
    if (nextIndex !== currentTextIndex) {
      setCurrentTextIndex(nextIndex);
    }
  }, [currentTextIndex, texts.length, loop]);

  useEffect(() => {
    const intervalId = setInterval(next, rotationInterval);
    return () => clearInterval(intervalId);
  }, [next, rotationInterval]);

  return (
    <LayoutGroup>
      <motion.div layout transition={TRANSITION} css={styles.typingWrapper}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div key={currentTextIndex} layout transition={TRANSITION} css={styles.textRotate}>
            {elements.map((wordObj, wordIndex, array) => {
              const previousCharsCount = array
                .slice(0, wordIndex)
                .reduce((sum, word) => sum + word.characters.length, 0);
              return (
                <span key={wordIndex} css={styles.textRotateWord}>
                  {wordObj.characters.map((char, charIndex) => (
                    <motion.span
                      key={charIndex}
                      initial={INITIAL}
                      animate={ANIMATE}
                      exit={EXIT}
                      css={styles.testRotateElement}
                      transition={{
                        ...TRANSITION,
                        delay: getStaggerDelay(previousCharsCount + charIndex),
                      }}
                    >
                      {char}
                    </motion.span>
                  ))}
                  {wordObj.needsSpace && <span>&nbsp;</span>}
                </span>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </LayoutGroup>
  );
};

export default TypingText;
