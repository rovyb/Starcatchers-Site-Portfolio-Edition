import { keyframes } from "@stitches/react";
import { styled } from "@root/stitches.config";
import { ShootingStar } from "@components/ShootingStar/ShootingStar";
import swing from "@assets/images/starcatcher-swinging-bottom.png";
import cloud from "@assets/images/starcatcher-swinging-cloud.png";
import shootingStar from "@assets/images/shooting-star.png";

const HiddenOverflow = styled("div", {
  overflow: "hidden",
})

const Container = styled("div", {
  height: 500,
  maxWidth: "$container",
  margin: "0 auto",
  position: "relative",
})

const Clouds = styled("img", {
  position: "absolute",
  height: 400,
  right: 0,
  top: 20,
  userSelect: "none",
  pointerEvents: "none",
})

const swingingAnimation = keyframes({
  "0%": { transform: "rotate(-20deg) translate(20px)" },
  "25%": { transform: "rotate(0deg) translate(20px, -5px)" },
  "50%": { transform: "rotate(-20deg) translate(20px)" },
  "75%": { transform: "rotate(-40deg) translate(25px, 10px)" },
  "100%": { transform: "rotate(-20deg) translate(20px)" },
})

const SwingingStarcatcher = styled(Clouds, {
  position: "absolute",
  height: 400,
  right: 0,
  top: 20,
  animation: `${swingingAnimation} 5s infinite linear`,
  transform: "rotate(-20deg) translate(20px)"
})

export const Swing = () => (
    <HiddenOverflow>
      <Container>
        <ShootingStar>
          <img src={shootingStar} alt="Shooting star" />
        </ShootingStar>
        <ShootingStar star="4">
          <img src={shootingStar} alt="Shooting star" />
        </ShootingStar>
        <ShootingStar star="5">
          <img src={shootingStar} alt="Shooting star" />
        </ShootingStar>
        <ShootingStar star="6">
          <img src={shootingStar} alt="Shooting star" />
        </ShootingStar>
        <SwingingStarcatcher src={swing} alt="" className="Swing-Starcatcher" />
        <Clouds src={cloud} alt="" className="Swing-Starcatcher" />
      </Container>
    </HiddenOverflow>
);
