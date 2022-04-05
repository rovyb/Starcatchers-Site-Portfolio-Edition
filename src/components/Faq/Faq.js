import { useState } from "react";
import { styled } from "@root/stitches.config";
import { Title } from "@components/Typography/Title";

const Background = styled("div", {
  padding: "$lg $md",
});

const Container = styled("div", {
  maxWidth: "$container",
  margin: "0 auto",
});

const Box = styled("div", {
  backgroundColor: "$cream",
  padding: "$lg",
  color: "$navy",
  borderRadius: "$box",
  marginBottom: "$lg",
  cursor: "pointer",
});

const Question = styled("div", {
  fontFamily: "$starborn",
  fontSize: "$md",
  textTransform: "uppercase",
});

const Answer = styled("div", {
  fontFamily: "$rocko",
  fontSize: "$md",
  overflow: "hidden",
  maxHeight: 0,
  transition: "all 0s",
  animationFillMode: "forwards",
  opacity: 0,
  variants: {
    state: {
      open: {
        transition: "all .3s ease",
        paddingTop: "$md",
        overflow: "visible",
        maxHeight: 1200,
        height: "auto",
        opacity: 1,
      },
    },
  },
});

const Label = styled("div", {
  fontWeight: "bold",
  variants: {
    spacing: {
      top: {
        marginTop: "$md",
      },
    },
  },
});

const Paragraph = styled("p", {
  marginBottom: "$md",
});

const MintDetail = styled("p", {
  fontSize: "$sm",
});

export const Faq = () => {
  const [expanded, setExpanded] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
  });

  const expand = (index) => {
    setExpanded((current) => ({ ...current, [index]: !current[index] }));
  };

  return (
    <>
      <Background>
        <Container>
          <Title spacing="x" color="cream">
            FAQ
          </Title>
          <Box onClick={() => expand(1)}>
            <Question>Wen mint?</Question>
            <Answer state={expanded[1] ? "open" : undefined}>
              2/22/22 at 2:22pm PST.
            </Answer>
          </Box>

          <Box onClick={() => expand(2)}>
            <Question>How do I mint? How many can I mint?</Question>
            <Answer state={expanded[2] ? "open" : undefined}>
              <Paragraph>
                Starcatchers will have a 100% private mint. Members of the
                Starlist will be able to mint with the inclusion of some lucky
                winners in the raffle Starlist that will soon follow after pre
                mint. Starcatchers incorporated a "Stacked Allowlist" method by
                allowing members of the community to acquire multiple Starlist
                spots as a reward for their extensive support on the project.
                Based on your acquired level you are able to mint the following.
              </Paragraph>

              <Label>Starlist Raffle Winners</Label>
              <MintDetail>Mint Price: .111</MintDetail>
              <MintDetail>Max Mint: 1</MintDetail>

              <Label spacing="top">Starlist Level 1</Label>
              <MintDetail>Mint Price: .111</MintDetail>
              <MintDetail>Max Mint: 2</MintDetail>

              <Label spacing="top">Starlist Level 2</Label>
              <MintDetail>Mint Price: .1</MintDetail>
              <MintDetail>Max Mint: 2</MintDetail>

              <Label spacing="top">Starlist Level 3</Label>
              <MintDetail>Mint Price: .1</MintDetail>
              <MintDetail>Max Mint: 3</MintDetail>

              <Label spacing="top">Starlist Level 4</Label>
              <MintDetail>Mint Price: .0888</MintDetail>
              <MintDetail>Max Mint: 3</MintDetail>

              <Label spacing="top">Starlist Level MAX</Label>
              <MintDetail>Mint Price: .0888</MintDetail>
              <MintDetail>Max Mint: 4</MintDetail>
            </Answer>
          </Box>

          <Box onClick={() => expand(3)}>
            <Question>Wen roadmap?</Question>
            <Answer state={expanded[3] ? "open" : undefined}>
              While Starcatchers currently has no roadmap, we intend to release
              details of several objectives. Those being the build out of a
              scalable governance system, merch releases, and real life events
              that are exclusive to Starcatcher holders in the near future.
            </Answer>
          </Box>

          <Box onClick={() => expand(4)}>
            <Question>What is Starcatchers?</Question>
            <Answer state={expanded[4] ? "open" : undefined}>
              Starcatchers are celestial beings. We shine brightly, traversing
              the galaxy while drawing in people and communities around them.
            </Answer>
          </Box>
        </Container>
      </Background>
    </>
  );
};
