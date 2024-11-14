/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from "react";
import Hangul from "hangul-js";

import { typingLabel, blink } from "./styles/TypingText.styles";

interface valuePropsInterface {
  setIsTypingComplete: (newState: boolean) => void;
}

const TypingText: React.FC<valuePropsInterface> = ({ setIsTypingComplete }) => {
  const [typingText, setTypingText] = useState<String>("");
  const [currentTypingStep, setCurrentTypingStep] = useState<number>(0);
  const [loopIndex, setLoopIndex] = useState<number>(0);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [isComplete, setIsComplete] = useState<boolean>(false);

  const pauseTime = 2000;
  const speed = 100;
  const typingTextList = ["호기심많은", "끈기있는", "긍정적인", "열정적인", "도전하는"];

  useEffect(() => {
    const handleTyping = () => {
      const currentText = typingTextList[loopIndex]; // 현재 표출될 단어
      if (!currentText) return;
      const splitText = Hangul.disassemble(currentText); // 표출될 단어 자모음 분해

      setCurrentTypingStep((prev) => prev + 1);
      if (!isDeleting) {
        setTypingText(Hangul.assemble(splitText.slice(0, currentTypingStep + 1)));
        if (currentTypingStep + 1 >= splitText.length) {
          // 모든 글자가 다 써졌을 때
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (loopIndex + 1 >= typingTextList.length) {
          setIsComplete(true);
          setIsTypingComplete(true);
          return;
        } // 단어목록 끝에 도달하면 끝
        if (typingText.length > 0) {
          // 전부 지워질 때 까지 한글자씩 삭제
          setTypingText(typingText.slice(0, typingText.length - 1)); //
        } else {
          // 다 지워졌다면 다음 단어로 넘어가기
          setLoopIndex((prev) => prev + 1);
          setCurrentTypingStep(0);
          setIsDeleting(false);
        }
      }
    };
    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [typingText, isDeleting]);

  return <span css={[typingLabel, !isComplete && blink]}>{typingText}</span>;
};

export default TypingText;
