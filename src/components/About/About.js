import { styled } from "@root/stitches.config";
import { Anchor } from "@components/Anchor";
import { Subtitle } from "@components/Typography/Subtitle";
import whatIsStarcatchers from "@assets/images/what-is-starcatchers.gif";

const Background = styled("div", {
  backgroundColor: "$cream",
  padding: "$xl $md",
});

const Container = styled("div", {
  maxWidth: "$container",
  margin: "0 auto",
  "@bp3": {
    display: "flex",
    alignItems: "center",
  },
});

const PreviewImage = styled("div", {
  width: "55%",
  margin: "0 auto",
  "& img": {
    borderRadius: "$img",
  },
  "@bp3": {
    width: "38%",
    paddingRight: "$md",
    "& img": {
      margin: "0 auto",
    },
  },
});

const Content = styled("div", {
  "@bp3": {
    width: "62%",
  },
});

export const Title = styled("h1", {
  fontFamily: "$starborn",
  fontSize: "$md",
  textAlign: "center",
  color: "$navy",
  textTransform: "uppercase",
  "@bp1": {
    fontSize: "$lg",
  },
  "@bp2": {
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


export const About = () => (
  <>
    <Anchor id="about" />
    <Background>
      <Container>
        <PreviewImage>
          <img src={whatIsStarcatchers} alt="Starcatcher Preview" />
        </PreviewImage>
        <Content>
          <Title spacing="x">What is Starcatchers?</Title>
          <Subtitle textAlign="center">
            Starcatchers is a collection of 10,000 fun loving stars. Our
            community-driven project is aimed at developing a brand that
            represents the values of our community and bridges the gap between
            the web3 and physical worlds.
          </Subtitle>
        </Content>
      </Container>
    </Background>
  </>
);
