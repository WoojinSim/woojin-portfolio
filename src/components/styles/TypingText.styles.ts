import { css } from "@emotion/react";

export const typingWrapper = css({
  position: "relative",
  overflow: "hidden",
  color: "white",
  backgroundColor: "#0984E3",
  padding: "2px 16px",
  borderRadius: "4px",
  boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.2)",
});

export const textRotate = css({
  display: "flex",
  flexWrap: "wrap",
  whiteSpace: "pre-wrap",
  position: "relative",
  width: "100%",
});

export const textRotateWord = css({
  display: "inline-flex",
  overflow: "hidden",
  padding: "1px",
});

export const testRotateElement = css({
  display: "inline-block",
  transform: "translateZ(0)",
});
