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
  marginTop: "1rem",
  overflow: "hidden",
  "@media screen and (max-width: 768px)": {
    marginTop: "0",
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
  paddingTop: "1rem",
  paddingBottom: "5rem",
  paddingLeft: "4rem",
  borderLeft: "1px solid rgba(0, 0, 0, 0.2)",
  gap: "0.8rem",
  "@media screen and (max-width: 768px)": {
    gap: "1rem",
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
  "@media screen and (max-width: 768px)": {
    marginBottom: "0.25rem",
    flexDirection: "column",
    alignItems: "center",
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
    "@media screen and (max-width: 768px)": {
      marginTop: "0.2rem",
    },
  },
});

export const careerItemDescriptionLabel = css({
  fontFamily: "NanumSquareNeo",
  color: "#454545",
  fontSize: "0.85rem",
  "@media screen and (max-width: 768px)": {
    textAlign: "center",
  },
});

export const careerItemPositionContainer = css({
  display: "flex",
  flexWrap: "wrap",
  flexDirection: "row",
  justifyContent: "start",
  alignItems: "center",
  width: "100%",
  gap: "0.25rem",
  "& > span": {
    cursor: "default",
    fontFamily: "NanumSquareNeoBold",
    color: "white",
    lineHeight: "1.5",
    backgroundColor: "#454545",
    padding: "0.2rem 1rem",
    borderRadius: "4px",
    fontSize: "0.95rem",
  },
  "@media screen and (max-width: 768px)": {
    justifyContent: "center",
    alignItems: "start",
  },
});

export const careerItemProjectWrapper = css({
  display: "flex",
  flexDirection: "column",
  justifyContent: "start",
  alignItems: "start",
  width: "100%",
  gap: "0.5rem",
});

export const careerItemProjectContainer = css({
  display: "flex",
  boxSizing: "border-box",
  flexDirection: "column",
  flexWrap: "nowrap",
  justifyContent: "start",
  alignItems: "start",
  width: "100%",
  padding: "0.8rem",
  border: "1px solid rgba(0, 0, 0, 0.1)",
  borderRadius: "4px",
  gap: "0.4rem",
  // boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
});

export const careerItemProjectTitleWrapper = css({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "start",
  width: "100%",
  textAlign: "left",
  marginBottom: "0.6rem",
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
    color: "#454545",
    fontSize: "0.875rem",
  },
});

export const careerItemProjectDescription = css({
  display: "block",
  textAlign: "left",
  fontFamily: "NanumSquareNeo",
  color: "#454545",
  fontSize: "0.875rem",
});

export const careerItemProjectDescriptionList = css({
  display: "flex",

  flexDirection: "column",
  justifyContent: "start",
  alignItems: "start",
  margin: "0",
  paddingLeft: "1.2rem",
  gap: "0.4rem",
  "& > li": {
    fontFamily: "NanumSquareNeo",
    color: "#454545",
    fontSize: "0.875rem",
  },
});
