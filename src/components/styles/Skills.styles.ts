import { css } from "@emotion/react";

export const mainContainer = css({
  padding: "100px 20% 100px",
  backgroundColor: "#F1F2F6",
  display: "flex",
  flexDirection: "column",
  gap: "50px",
  "@media screen and (max-width: 768px)": {
    padding: "100px 5% 100px",
  },
});

export const itemTitleLabel = css({
  fontFamily: "NanumSquareNeoExtraBold",
  fontSize: "2.5rem",
  display: "block",
});

export const skillContainer = css({
  display: "flex",
  flexDirection: "row",
  width: "100%",
  justifyContent: "flex-start",
  columnGap: "1rem",
  "@media screen and (max-width: 768px)": {
    flexDirection: "column",
    rowGap: "1rem",
  },
});

export const categorySelectContainer = css({

});

export const skillBadgeContainer = css({
  display: "flex",
  flexGrow: 1,
  "& span": {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F1F2F6",
    padding: "10px 20px",
  },
});
// export const categoryTitle = css({
//   display: "inline-flex",
//   width: "20rem",
//   alignItems: "center",
//   justifyContent: "center",
//   fontFamily: "NanumSquareNeoBold",
//   fontSize: "1.5rem",
//   color: "#0984E3",
//   "@media screen and (max-width: 768px)": {
//     fontSize: "1.5rem",
//     marginTop: "1rem",
//     width: "100%",
//   },
// });

// export const categorySubContainer = css({
//   boxSizing: "border-box",
//   width: "100%",
//   alignItems: "center",
//   padding: "1rem",
//   rowGap: "1rem",
//   border: "1px solid #BBB",
//   borderRadius: "10px",
// });

// export const categorySubTitle = css({
//   display: "block",
//   marginBottom: "1rem",
//   fontFamily: "NanumSquareNeo",
//   fontWeight: "bold",
//   fontSize: "1.2rem",
//   color: "#2D3436",
//   position: "relative",
//   cursor: "default",
// });

// export const skillIcon = css({
//   fontSize: "1.3rem",
//   marginRight: "0.5rem",
//   transition: "transform 0.3s ease",
// });

// export const skillsList = css({
//   display: "inline-flex",
//   flexWrap: "wrap",
//   gap: "10px",
//   listStyle: "none",
//   padding: 0,
//   margin: 0,
//   "@media screen and (max-width: 768px)": {
//     gap: "5px",
//     fontSize: "1rem",
//   },

//   "& li": {
//     display: "inline-flex",
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "#F1F2F6",
//     padding: "10px 20px",
//     borderRadius: "25px",
//     fontSize: "1.1rem",
//     transition: "all 0.3s ease",
//     cursor: "default",

//     "& svg": {
//       fontSize: "1.3rem",
//       marginRight: "0.5rem",
//       transition: "transform 0.3s ease",
//     },

//     "&:hover": {
//       backgroundColor: "#0984E3",
//       color: "white",
//       transform: "translateY(-2px)",
//       boxShadow: "0 4px 8px rgba(0,0,0,0.3)",

//       "& svg": {
//         transform: "scale(1.1)",
//       },
//     },

//     "&[data-skill='typescript']:hover": {
//       backgroundColor: "#3178C6",
//       boxShadow: "0 4px 8px rgba(49,120,198,0.3)",
//     },
//     "&[data-skill='javascript']:hover": {
//       backgroundColor: "#F7DF1E",
//       color: "black",
//       boxShadow: "0 4px 8px rgba(247,223,30,0.3)",
//     },
//     "&[data-skill='python']:hover": {
//       backgroundColor: "#3776AB",
//       boxShadow: "0 4px 8px rgba(55,118,171,0.3)",
//     },

//     "&[data-skill='java']:hover": {
//       backgroundColor: "#007396",
//       boxShadow: "0 4px 8px rgba(0,115,150,0.3)",
//     },
//     "&[data-skill='cplusplus']:hover": {
//       backgroundColor: "#00599C",
//       boxShadow: "0 4px 8px rgba(0,89,156,0.3)",
//     },
//     "&[data-skill='csharp']:hover": {
//       backgroundColor: "#239120",
//       boxShadow: "0 4px 8px rgba(35,145,32,0.3)",
//     },
//     "&[data-skill='r']:hover": {
//       backgroundColor: "#276DC3",
//       boxShadow: "0 4px 8px rgba(39,109,195,0.3)",
//     },
//     "&[data-skill='lua']:hover": {
//       backgroundColor: "#2C2D72",
//       boxShadow: "0 4px 8px rgba(44,45,114,0.3)",
//     },

//     "&[data-skill='react']:hover": {
//       backgroundColor: "#61DAFB",
//       color: "black",
//       boxShadow: "0 4px 8px rgba(97,218,251,0.3)",
//     },
//     "&[data-skill='reactnative']:hover": {
//       backgroundColor: "#61DAFB",
//       color: "black",
//       boxShadow: "0 4px 8px rgba(97,218,251,0.3)",
//     },
//     "&[data-skill='emotion']:hover": {
//       backgroundColor: "#cf6cc3",
//       boxShadow: "0 4px 8px rgba(207, 108,195, 0.3)",
//     },
//     "&[data-skill='express']:hover": {
//       backgroundColor: "#000000",
//       boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
//     },

//     "&[data-skill='tailwind']:hover": {
//       backgroundColor: "#06B6D4",
//       boxShadow: "0 4px 8px rgba(6,182,212,0.3)",
//     },
//     "&[data-skill='redux']:hover": {
//       backgroundColor: "#764ABC",
//       color: "white",
//       boxShadow: "0 4px 8px rgba(118,74,188,0.3)",
//     },
//     "&[data-skill='next']:hover": {
//       backgroundColor: "#000000",
//       boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
//     },
//     "&[data-skill='django']:hover": {
//       backgroundColor: "#092E20",
//       boxShadow: "0 4px 8px rgba(9,46,32,0.3)",
//     },
//     "&[data-skill='flask']:hover": {
//       backgroundColor: "#000000",
//       boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
//     },
//     "&[data-skill='dotnet']:hover": {
//       backgroundColor: "#512BD4",
//       boxShadow: "0 4px 8px rgba(81,43,212,0.3)",
//     },
//   },
// });

// TODO: 호버 시 분야별 배경색깔 추가
