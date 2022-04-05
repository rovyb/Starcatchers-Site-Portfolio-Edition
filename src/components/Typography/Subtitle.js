import { styled } from "@root/stitches.config";

export const Subtitle = styled("p", {
  fontFamily: "$rocko",
  fontSize: "$md",
  color: "$navy",
  variants: {
    textAlign: {
      center: {
        textAlign: "center"
      }
    }
  }
});
