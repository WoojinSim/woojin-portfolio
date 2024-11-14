import { css, keyframes } from "@emotion/react";

const blinkKeyframe = keyframes({
  "0%, 100%": {
    borderRight: "8px solid #03aeef00",
  },
  "50%": {
    borderRight: "8px solid #03aeefff",
  },
});

export const typingLabel = css({
  fontFamily: "NanumSquareNeoHeavy",
  borderRight: "8px solid #03aeef00",
  paddingRight: "1px",
});

export const blink = css({
  animation: `${blinkKeyframe} 1s infinite`,
});
