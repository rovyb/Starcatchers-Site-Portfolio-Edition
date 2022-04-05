import { keyframes } from "@stitches/react";
import { styled } from "@root/stitches.config";
import { ShootingStar } from "@components/ShootingStar/ShootingStar";
import stardudeHead from "@assets/images/stardude-head.png";
import stardudeBody from "@assets/images/stardude-body.png";
import shootingStar from "@assets/images/shooting-star.png";

const Container = styled("div", {
  height: 400,
  maxWidth: "$container",
  margin: "0 auto",
  position: "relative",
  "@bp1": {
    height: 500
  }
});

const Title = styled("div", {
  fontFamily: "$starborn",
  fontSize: "$lg",
  color: "$cream",
  textAlign: "center",
  padding: "$lg 0",
  "@bp3": {
    fontSize: "$xxxl",
  },
});

const Starcatcher = styled("div", {
  position: "absolute",
  bottom: -100,
  right: 0,
  width: "70%",
  maxWidth: 350,
  padding: "$lg",
  userSelect: "none",
  "@bp1": {
    width: "60%",
    bottom: -130,
  }
});

const headBobble = keyframes({
  "0%": { transform: "translateY(0)" },
  "100%": { transform: "translateY(-20px)" },
});

const Head = styled("img", {
  zIndex: 200,
  position: "relative",
  right: -10,
  bottom: -10,
  pointerEvents: "none",
  animation: `${headBobble} 2s infinite alternate-reverse`,
});

const bodyBobble = keyframes({
  "0%": { transform: "translateY(0)" },
  "100%": { transform: "translateY(-24px)" },
});

const Body = styled("img", {
  zIndex: 100,
  position: "relative",
  pointerEvents: "none",
  animation: `${bodyBobble} 2s infinite alternate-reverse`,
});

export const Hero = () => (
  <Container>
    <Title>STARCATCHERS</Title>
    <ShootingStar>
      <img src={shootingStar} alt="Shooting star" />
    </ShootingStar>
    <ShootingStar star="2">
      <img src={shootingStar} alt="Shooting star" />
    </ShootingStar>
    <ShootingStar star="3">
      <img src={shootingStar} alt="Shooting star" />
    </ShootingStar>
    <Starcatcher>
      <Head src={stardudeHead} alt="Starcatcher head" />
      <Body src={stardudeBody} alt="Starcatcher body" />
    </Starcatcher>
  </Container>
);
