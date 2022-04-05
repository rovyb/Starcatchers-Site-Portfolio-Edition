import { styled } from "@root/stitches.config";

export const Button = styled("button", {
  backgroundColor: "$navy",
  borderRadius: "$button",
  padding: "$md $lg",
  fontFamily: "$starborn",
  textTransform: "uppercase",
  color: "$cream",
  fontSize: "$md",
  border: "2px solid $navy",
  outline: "none",
  "&:focus": {
    borderColor: "$navyLight",
  },
  "&:disabled": {
    opacity: 0.75,
    cursor: "not-allowed",
  },
});
