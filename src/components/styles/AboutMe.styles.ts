import { css } from "@emotion/react";

export const mainContainer = css({
  padding: "100px 20% 100px",
});

export const itemTitleLabel = css({
  fontFamily: "NanumSquareNeoExtraBold",
  fontSize: "2.5rem",
  marginBottom: "50px",
  display: "block",
});

export const titleLabel = css({
  display: "block",
  fontSize: "26px", // 크기 증가
  fontFamily: "NanumSquareNeoBold",
  marginBottom: "25px", // 여백 증가
  lineHeight: "1.4",
  color: "#2d2d2d",
});

export const contentLabel = css({
  display: "block",
  fontSize: "17px",
  fontFamily: "NanumSquareNeo",
  lineHeight: "1.8", // 줄간격 추가
  color: "#4a4a4a",
  marginBottom: "8px", // 문단 간격 추가
});

export const urlContainer = css({
  marginTop: "20px",
});

export const urlBtn = css({
  textDecoration: "none",
  color: "#4a4a4a",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "start",
  gap: "8px",
  overflow: "hidden",
  border: "1px solid #4a4a4a00",
  borderRadius: "15px",
  padding: "2px",
  transition: "all 0.3s ease",
  fill: "#4a4a4a",

  "&:hover": {
    border: "1px solid #4a4a4aff",
    color: "#ffffff",
    backgroundColor: "#4a4a4a",
  },

  "& span": {
    // 텍스트를 위한 span 스타일
    width: 0,
    overflow: "hidden",
    whiteSpace: "nowrap",
    transition: "width 0.3s ease",
  },

  "&:hover span": {
    // 호버 시 텍스트 표시
    width: "62px",
  },
});
