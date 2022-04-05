import { styled } from "@root/stitches.config";
import { Clouds } from "@components/Clouds/Clouds";
import rocket from "@assets/images/rocket-clouds.png";

const Background = styled("div", {
  position: "relative",
  height: 500,
});

const Rocket = styled("img", {
  width: 1000,
  position: "absolute",
  bottom: 0,
  left: 0,
  zIndex: 100,
  userSelect: "none",
  pointerEvents: "none",
});

const Container = styled("div", {
  position: "absolute",
  bottom: 0,
  width: "100%",
});

export const Footer = () => (
  <Background>
    <Rocket src={rocket} alt="rocket" />
    <Container>
      <Clouds position="top" />
    </Container>
  </Background>
);
