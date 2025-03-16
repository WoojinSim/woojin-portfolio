import { css } from "@emotion/react";

export const mainContainer = css({
  padding: "100px 20% 100px",
  backgroundColor: "white",
  "@media screen and (max-width: 768px)": {
    padding: "100px 5% 100px",
  },
});

export const itemTitleLabel = css({
  fontFamily: "NanumSquareNeoExtraBold",
  fontSize: "2.5rem",
  marginBottom: "6rem",
  display: "block",
});

export const careerContainer = css({
  display: "flex",
  flexDirection: "column",
  justifyContent: "start",
  alignItems: "start",
  flexWrap: "nowrap",
});

export const careerItemContainer = css({
  display: "flex",
  flexDirection: "row",
  justifyContent: "start",
  alignItems: "start",
  width: "100%",
  "@media screen and (max-width: 768px)": {
    flexDirection: "column",
    alignItems: "center",
  },
});

export const careerItemImageWrapper = css({
  width: "14rem",
  height: "14rem",
  backgroundColor: "white",
  borderRadius: "50%",
  boxShadow: "0 0 4px 1px rgba(0, 0, 0, 0.3)",
  marginRight: "4rem",
  overflow: "hidden",
  "@media screen and (max-width: 768px)": {
    marginRight: "0",
    marginBottom: "2rem",
    width: "10rem",
    height: "10rem",
  },
});

export const careerImage = css({
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

export const careerItemLabelContainer = css({
  display: "flex",
  flex: 1,
  minHeight: "14rem",
  flexDirection: "column",
  justifyContent: "start",
  alignItems: "start",
  paddingBottom: "6rem",
  paddingLeft: "4rem",
  borderLeft: "1px solid rgba(0, 0, 0, 0.2)",
  "@media screen and (max-width: 768px)": {
    paddingBottom: "2rem",
    paddingLeft: "0",
    borderLeft: "none",
  },
});

export const careerItemTitleWrapper = css({
  display: "flex",
  width: "100%",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "0.25rem",
  "@media screen and (max-width: 768px)": {
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "1rem",
  },
});

export const careerItemTitleLabel = css({
  color: "#454545",
  "&.title": {
    fontFamily: "NanumSquareNeoExtraBold",
    fontSize: "1.8rem",
  },
  "&.subTitle": {
    fontFamily: "NanumSquareNeo",
    color: "rgba(0, 0, 0, 0.6)",
    fontSize: "0.85rem",
  },
});

export const careerItemDescriptionLabel = css({
  fontFamily: "NanumSquareNeo",
  color: "#454545",
  fontSize: "0.85rem",
  marginBottom: "1rem",
  "@media screen and (max-width: 768px)": {
    marginBottom: "1rem",
    textAlign: "center",
  },
});

export const careerItemPositionContainer = css({
  display: "flex",
  flexDirection: "row",
  justifyContent: "start",
  alignItems: "center",
  width: "100%",
  marginBottom: "1rem",
  "& > span": {
    fontFamily: "NanumSquareNeo",
    color: "white",
    backgroundColor: "#454545",
    padding: "0.25rem 1rem",
    borderRadius: "4px",
    fontSize: "0.95rem",
    marginRight: "1rem",
  },
  "@media screen and (max-width: 768px)": {
    justifyContent: "center",
    alignItems: "start",
  },
});

export const careerItemProjectContainer = css({
  display: "flex",
  boxSizing: "border-box",
  flexDirection: "column",
  flexWrap: "nowrap",
  justifyContent: "start",
  alignItems: "start",
  width: "100%",
  marginBottom: "1rem",
  padding: "0.8rem",
  border: "1px solid rgba(0, 0, 0, 0.1)",
  borderRadius: "4px",
  // boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
});

export const careerItemProjectTitleWrapper = css({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "start",
  width: "100%",
  textAlign: "left",
  marginBottom: "1rem",
  "@media screen and (max-width: 768px)": {
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
});

export const careerItemProjectTitle = css({
  display: "block",
  fontFamily: "NanumSquareNeoExtraBold",
  fontSize: "1rem",
  color: "#454545",
  "&.subTitle": {
    fontFamily: "NanumSquareNeo",
    color: "rgba(0, 0, 0, 0.6)",
    fontSize: "0.875rem",
  },
});

export const careerItemProjectDescription = css({
  display: "block",
  textAlign: "left",
  fontFamily: "NanumSquareNeo",
  color: "rgba(0, 0, 0, 0.6)",
  fontSize: "0.875rem",
});
