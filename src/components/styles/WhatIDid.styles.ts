import { css } from "@emotion/react";

export const mainContainer = css({
  padding: "100px 20% 100px",
  "@media screen and (max-width: 768px)": {
    padding: "100px 5% 100px",
  },
});

export const mainTitleLabel = css({
  fontFamily: "NanumSquareNeoExtraBold",
  fontSize: "2.5rem",
  marginBottom: "50px",
  display: "block",
});

export const mainGridContainer = css({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(400px, 1fr))",
  gap: "20px",
  "@media screen and (max-width: 768px)": {
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
  },
});

export const itemTitleLabel = css({
  fontFamily: "NanumSquareNeoBold",
  fontSize: "1.375rem",
  background: "linear-gradient(45deg, #1e40af, #3b82f6)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  letterSpacing: "-0.02em",
});

export const itemContainer = css({
  position: "relative",
  display: "inline-block",
  borderRadius: "16px",
  border: "1px solid rgba(0, 0, 0, 0.06)",
  boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
  boxSizing: "border-box",
  padding: "24px",
  overflow: "hidden",
  cursor: "pointer",
  alignSelf: "start",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  background: "#ffffff",
  "&:hover": {
    border: "1px solid rgba(0, 0, 0, 0.08)",
    transform: "translateY(-8px)",
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.12)",
    background: "#fafafa",
    "& .itemDetailButton": {
      top: "10%",
    },
  },
});

export const itemDetailButton = css({
  position: "absolute",
  top: "-10%",
  right: "50%",
  transform: "translateX(50%)",
  background: "rgba(0, 0, 0, 0.5)",
  color: "#FFF",
  padding: "5px 10px",
  borderRadius: "5px",
  fontFamily: "NanumSquareNeoBold",
  fontSize: "0.875rem",
  transition: "all 0.3s ease",
});

export const itemSubtitleContainer = css({
  marginTop: "8px",
  paddingBottom: "16px",
  display: "flex",
  justifyContent: "space-between",
  borderBottom: "1px solid rgba(0, 0, 0, 0.08)",
});

export const itemSubtitleLabel = css({
  display: "block",
  fontFamily: "NanumSquareNeoLight",
  fontSize: "14px",
  color: "rgba(0, 0, 0, 0.45)",
  letterSpacing: "0.02em",
});

export const itemDescriptionContainer = css({
  marginTop: "0",
});

export const itemDescriptionTitleLabel = css({
  display: "block",
  margin: "20px 0 16px",
  fontFamily: "NanumSquareNeoBold",
  fontSize: "1.06rem",
  color: "#222222",
  letterSpacing: "-0.01em",
  lineHeight: "1.4",
});

export const itemDescriptionSubTitleLabel = css({
  display: "block",
  marginBottom: "8px",
  fontFamily: "NanumSquareNeo",
  fontSize: "0.870rem",
  color: "#444444",
  letterSpacing: "-0.01em",
  lineHeight: "1.4",
});

export const itemDescriptionList = css({
  marginTop: "0",
  marginBottom: "8px",
  paddingLeft: "20px",
  fontFamily: "NanumSquareNeo",
  fontSize: "0.870rem",
  color: "#444444",
  lineHeight: "1.6",
  "& li": {
    marginBottom: "8px",
    "&:last-child": {
      marginBottom: "0",
    },
  },
});

export const itemUsedLanguageContainer = css({
  display: "flex",
  alignItems: "center",
  gap: "2px",
  marginTop: "20px",
  padding: "8px 12px",
  border: "1px solid rgba(0, 0, 0, 0.12)",
  borderRadius: "8px",
  fontSize: "0.870rem",
  fontFamily: "NanumSquareNeo",
  color: "#333333",
  background: "rgba(0, 0, 0, 0.02)",
  svg: {
    color: "#666",
  },
});
