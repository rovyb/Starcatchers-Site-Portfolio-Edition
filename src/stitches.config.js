import { createStitches } from "@stitches/react";

export const { styled } = createStitches({
  media: {
    bp1: "(min-width: 450px)",
    bp2: "(min-width: 650px)",
    bp3: "(min-width: 850px)",
    bp4: "(min-width: 1000px)",
  },
  theme: {
    fonts: {
      starborn: "Starborn",
      rocko: "RockoUltraFLF",
    },
    radii: {
      img: "25px",
      button: "50px",
      box: "10px",
    },
    colors: {
      cream: "#ece1c0",
      creamDark: "#a49d88",
      creamLight: "#f9f6ec",
      navy: "#171c30",
      navyDark: "#131522",
      navyLight: "#464a59",
      pink: "#ec4e7a",
      teal: "#00ffc5",
      yellow: "#ffe000",
      purple: "#3b4775",
    },
    sizes: {
      container: "1260px",
    },
    space: {
      xs: "4px",
      sm: "8px",
      md: "16px",
      lg: "24px",
      xl: "32px",
      xxl: "40px",
    },
    fontSizes: {
      xs: "16px",
      sm: "20px",
      md: "24px",
      lg: "32px",
      xl: "40px",
      xxl: "48px",
      xxxl: "56px",
    },
  },
});
