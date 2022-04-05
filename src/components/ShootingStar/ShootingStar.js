import { keyframes } from "@stitches/react";
import { styled } from "@root/stitches.config";

const shootingStarAnimation = keyframes({
  "0%": {
    right: 200,
    opacity: 0,
    bottom: 0,
  },
  "5%": {
    opacity: 1,
  },
  "10%, 100%": {
    right: 820,
    bottom: 340,
    opacity: 0
  },
})

export const ShootingStar = styled("div", {
  animation: `${shootingStarAnimation} 15s infinite`,
  position: "absolute",
  bottom: 0,
  right: 200,
  width: 200,
  opacity: 0,
  userSelect: "none",
  "& img": {
    pointerEvents: "none",
  },
  variants: {
    star: {
      "1": {
        transform: "rotate(3deg)",
        animationDelay: "3s",
      },
      "2": {
        transform: "rotate(3deg) translate(150px, -100px)",
        animationDelay: "2s",
      },
      "3": {
        transform: "rotate(3deg) translate(-250px, -100px)",
        animationDelay: "2.5s",
      },
      "4": {
        transform: "rotate(3deg) translate(300px, 100px)",
        animationDelay: "2.1s",
      },
      "5": {
        transform: "rotate(3deg) translate(100px, 250px)",
        animationDelay: "2.5s",
      },
      "6": {
        transform: "rotate(3deg) translate(200px, -80px)",
        animationDelay: "3.2s",
      },
    },
  },
  defaultVariants: {
    star: "1",
  },
});
