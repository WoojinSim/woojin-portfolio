import React, { useState, useEffect } from "react";
import Hangul from "hangul-js";

import styles from "./styles/TypingText.module.css";

const TypingText: React.FC = () => {
  const [typingText, setTypingText] = useState<String>("");
  const [currentTypingStep, setCurrentTypingStep] = useState<number>(0);
  const [loopIndex, setLoopIndex] = useState<number>(0);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  const pauseTime = 2000;
  const speed = 100;
  const typingTextList = ["호기심많은", "끈기있는", "긍정적인", "열정적인", "도전하는"];

  useEffect(() => {
    console.log("이펙트");
    const handleTyping = () => {
      const currentText = typingTextList[loopIndex];
      if (!currentText) return;
      const splitText = Hangul.disassemble(currentText);
      setCurrentTypingStep((prev) => prev + 1);
      if (!isDeleting) {
        setTypingText(Hangul.assemble(splitText.slice(0, currentTypingStep + 1)));

        if (currentTypingStep + 1 >= splitText.length) {
          // 모든 글자가 다 써졌을 때
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (loopIndex + 1 >= typingTextList.length) {
          return;
        }
        if (typingText.length > 0) {
          setTypingText(typingText.slice(0, typingText.length - 1));
        } else {
          setLoopIndex((prev) => prev + 1);
          setCurrentTypingStep(0);
          setIsDeleting(false);
        }
      }
    };
    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [typingText, isDeleting]);

  return <span className={styles.typingLabel}>{typingText}</span>;
};

export default TypingText;
