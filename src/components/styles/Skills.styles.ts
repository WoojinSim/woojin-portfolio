import { css } from "@emotion/react";

export const mainContainer = css({
  padding: "100px 20% 100px",
  backgroundColor: "#F1F2F6",
});

export const itemTitleLabel = css({
  fontFamily: "NanumSquareNeoExtraBold",
  fontSize: "2.5rem",
  marginBottom: "50px",
  display: "block",
});

export const categoryContainer = css({
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "center",
  columnGap: "2rem",
});

export const categoryLabel = css({
  display: "inline-flex",
  width: "8rem",
  alignItems: "center",
  justifyContent: "center",
  fontFamily: "NanumSquareNeoBold",
  fontSize: "1.5rem",
  color: "#0984E3",
});

export const skillsList = css({
  display: "inline-flex",
  flexWrap: "wrap",
  gap: "10px",
  listStyle: "none",
  padding: 0,

  "& li": {
    display: "inline-flex",
    alignItems: "center",
    backgroundColor: "#F1F2F6",
    padding: "10px 20px",
    borderRadius: "25px",
    fontSize: "1.1rem",
    transition: "all 0.3s ease",
    cursor: "default",

    "& svg": {
      fontSize: "1.3rem",
      marginRight: "0.5rem",
      transition: "transform 0.3s ease",
    },

    "&:hover": {
      backgroundColor: "#0984E3",
      color: "white",
      transform: "translateY(-2px)",
      boxShadow: "0 4px 8px rgba(9,132,227,0.3)", // 호버 시 그림자 강화

      "& svg": {
        transform: "scale(1.1)", // 호버 시 아이콘 확대
      },
    },
  },
});

// TODO: 호버 시 분야별 배경색깔 추가
