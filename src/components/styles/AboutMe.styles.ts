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
