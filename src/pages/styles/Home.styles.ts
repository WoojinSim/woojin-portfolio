import { css } from "@emotion/react";

export const wrap = css({
  margin: 0,
  boxSizing: "border-box",
  minHeight: "100vh",
  position: "relative",
});

export const headContainer = css({
  boxSizing: "border-box",
  height: "100vh",
  position: "relative",
  backgroundColor: "#f3f4f6",
});

export const headLabelContainer = css({
  position: "absolute",
  top: "46%",
  left: "15%",
  transform: "translateY(-50%)",
  fontSize: "60px",
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

export const contentContainer = css({
  backgroundColor: "white",
  boxSizing: "border-box",
  padding: "30px",
  margin: "0 40px",
  borderRadius: "10px",
  boxShadow: "0 0 10px 1px rgba(0, 0, 0, 0.1)",
});

export const mainContainer = css({
  padding: "0 20% 100px",
});

export const itemTitleLabel = css({
  fontFamily: "NanumSquareNeoExtraBold",
  fontSize: "38px",
  margin: "100px 0 50px",
  display: "block",
});
