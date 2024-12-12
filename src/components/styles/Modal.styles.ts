import { css } from "@emotion/react";

export const modalWrap = css({
  position: "fixed",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  padding: "50px 25%",
  boxSizing: "border-box",
  "@media screen and (max-width: 768px)": {
    padding: "50px 20px",
  },
});

export const modalContainer = css({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "white",
  padding: "40px",
  borderRadius: "10px",
  boxSizing: "border-box",
  width: "100%",
  height: "100%",
  boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
  "@media screen and (max-width: 768px)": {
    padding: "40px 20px",
  },
});

export const modalCloseButton = css({
  position: "absolute",
  top: "10px",
  right: "10px",
  width: "40px",
  height: "40px",
  background: "none",
  border: "none",
  cursor: "pointer",
  fontSize: "24px",
  fontWeight: "bold",
  color: "#000",
  "&:before, &:after": {
    content: '""',
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "60%",
    height: "2px",
    backgroundColor: "#454545",
  },
  "&:before": {
    transform: "translate(-50%, -50%) rotate(45deg)",
  },
  "&:after": {
    transform: "translate(-50%, -50%) rotate(-45deg)",
  },
});

export const modalTitleLabel = css({
  display: "block",
  fontFamily: "NanumSquareNeoHeavy",
  fontSize: "1.8rem",
  background: "linear-gradient(45deg, #1e40af, #3b82f6)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  letterSpacing: "-0.02em",
  marginBottom: "4px",
});

export const modalSubtitleContainer = css({
  display: "flex",
  fontFamily: "NanumSquareNeo",
  fontSize: "0.8rem",
  justifyContent: "space-between",
  opacity: "0.5",
  marginBottom: "30px",
});

export const modalDescriptionContainer = css({
  display: "block",
  padding: "16px 8px",
  overflow: "auto",
  fontFamily: "NanumSquareNeo",
  fontSize: "1rem",
  boxSizing: "border-box",
  borderTop: "1px solid #00000020",
  height: "100%",
  span: {
    display: "block",
    marginLeft: "10px",
    marginBottom: "16px",
    lineHeight: "1.65",
    color: "#333",
    wordBreak: "keep-all",
    strong: {
      fontWeight: "bold",
    },
  },
  "&::-webkit-scrollbar": {
    width: "4px",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "#00000020",
    borderRadius: "2px",
  },
  "&::-webkit-scrollbar-track": {
    backgroundColor: "#00000000",
  },
  "span.title": {
    display: "inline-block",
    marginLeft: "0",
    fontWeight: "bold",
    fontSize: "1.3rem",
    marginBottom: "16px",
    background: "linear-gradient(45deg, #1e40af, #3b82f6)",
    padding: "0 25px",
    borderRadius: "50px",
    color: "#fff",
    transition: "all 0.3s ease",
    "&:not(:first-of-type)": {
      marginTop: "40px",
    },
    "&:hover": {
      transform: "translateY(-5px) rotate(-4deg)",
      boxShadow: "0 5px 10px rgba(0, 0, 0, 0.1), 0 0 10px rgba(59, 130, 246, 0.5)",
    },
  },
});
