import { css } from "@emotion/react";

export const mainContainer = css({
  padding: "100px 20% 100px",
  "@media screen and (max-width: 768px)": {
    padding: "100px 5% 100px",
  },
});

export const itemTitleLabel = css({
  fontFamily: "NanumSquareNeoExtraBold",
  fontSize: "2.5rem",
  marginBottom: "50px",
  display: "block",
});

export const titleLabel = css({
  display: "block",
  fontSize: "1.625rem", // 크기 증가
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

export const profileContainer = css({
  marginBottom: "100px",
  display: "grid",
  gridTemplateColumns: "auto 1fr",
  alignItems: "center",
  gap: "2rem",
  "@media screen and (max-width: 768px)": {
    gridTemplateColumns: "1fr",
  },
});

export const profileImage = css({
  width: "140px",
  height: "140px",
  borderRadius: "50%",
  backgroundColor: "#F0F0F0",
  color: "#999999",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "@media screen and (max-width: 768px)": {
    width: "160px",
    height: "160px",
    margin: "0 auto",
  },
});

export const profileItemWrapper = css({
  display: "grid",
  gridTemplateColumns: "repeat(3, minmax(160px, 1fr))",
  gap: "2rem",
  listStyle: "none",
  padding: 0,
  margin: 0,
  marginLeft: "1rem",
  width: "100%",
  "@media screen and (max-width: 768px)": {
    marginLeft: "0",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
  },
});

export const profileItem = css({});

export const profileItemLabel = css({
  display: "block",
  fontSize: "1.125rem",
  fontFamily: "NanumSquareNeo",
  fontWeight: "bold",
  color: "#2d2d2d",
  marginBottom: "8px",
});

export const profileItemContent = css({
  display: "block",
  fontSize: "1rem",
  fontFamily: "NanumSquareNeo",
  lineHeight: "1.5",
  color: "#4a4a4a",
});
