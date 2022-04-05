import { styled } from "@root/stitches.config";

export const Title = styled("h1", {
  fontFamily: "$starborn",
  fontSize: "$lg",
  textAlign: "center",
  color: "$navy",
  textTransform: "uppercase",
  "@bp1": {
    fontSize: "$xl",
  },
  variants: {
    spacing: {
      x: {
        padding: "$md 0",
      },
    },
    color: {
      cream: {
        color: "$cream",
      },
    },
  },
});
