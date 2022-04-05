import { styled } from "@root/stitches.config";
import cloudsTop from "@assets/images/repeating-clouds-top.png";
import cloudsBottom from "@assets/images/repeating-clouds-bottom.png";

export const Clouds = styled("div", {
  height: 138,
  width: "100%",
  backgroundRepeat: "repeat-x",
  backgroundPosition: "center",
  marginBottom: -1,
  backgroundPositionX: "center",
  variants: {
    position: {
      top: {
        backgroundImage: `url(${cloudsTop})`,
      },
      bottom: {
        backgroundImage: `url(${cloudsBottom})`,
      },
    },
  },
  defaultVariants: {
    position: "bottom",
  },
});
