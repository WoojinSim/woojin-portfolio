import { css } from "@emotion/react";

export const wrap = css({
  margin: 0,
  color: "#454545",
  boxSizing: "border-box",
  overflowX: "hidden",
});

export const headContainer = css({
  position: "fixed",
  // position: "relative",
  top: 0,
  left: 0,
  right: 0,
  boxSizing: "border-box",
  height: "100vh",
  width: "100vw",
  backgroundColor: "#f3f4f6",
});

export const contentContainer = css({
  zIndex: 10,
  position: "relative",
  backgroundColor: "white",
  marginTop: "100vh",
});

export const headLabelContainer = css({
  position: "absolute",
  top: "46%",
  left: "15%",
  transform: "translateY(-50%)",
  fontSize: "3.75rem",
  "@media screen and (max-width: 768px)": {
    left: "5%",
    fontSize: "3rem",
  },
});

export const headLabelInnerContainer = css({
  display: "flex",
  flexWrap: "wrap",
  flexDirection: "row",
  justifyContent: "start",
  alignItems: "start",
  "@media screen and (max-width: 768px)": {
    flexDirection: "column",
    gap: "0.4rem",
  },
});

export const boldText = {
  extra: css({
    fontFamily: "NanumSquareNeoExtraBold",
  }),
  heavy: css({
    fontFamily: "NanumSquareNeoHeavy",
  }),
};

export const pointedColor = css({
  color: "#03aeefff",
  fontFamily: "NanumSquareNeoHeavy",
});

export const mainContainer = {
  aboutMe: css({
    padding: "100px 20% 100px",
  }),
  pastWorks: css({
    padding: "100px 20% 100px",
  }),
  currentWorks: css({
    padding: "100px 20% 100px",
    backgroundColor: "#fafafa",
    backgroundImage: "linear-gradient(45deg, #f1f3f5 1px, transparent 1px)",
    backgroundSize: "6px 6px",
  }),
};
