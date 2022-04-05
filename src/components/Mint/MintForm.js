import { useEffect, useState } from "react";
import { styled } from "@root/stitches.config";
import { Button } from "@components/Button/Button";
import { useUserDetails } from "@lib/hooks/useUserDetails";
import { useTierDetails } from "@lib/hooks/useTierDetails";
import { useMintDetails } from "@lib/hooks/useMintDetails";
import { useWeb3Modal } from "@lib/web3Modal/useWeb3Modal";

const Background = styled("div", {
  background: "$cream",
  padding: "$lg $md",
});

const Container = styled("div", {
  maxWidth: "$container",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const TotalSupply = styled("div", {
  fontFamily: "$starborn",
  textTransform: "uppercase",
  color: "$navy",
  fontSize: "$lg",
});

const Description = styled("div", {
  margin: "$lg 0",
  fontFamily: "$rocko",
  color: "$navy",
  fontSize: "$md",
});

const Timeleft = styled(Description, {
  margin: 0,
});

const Price = styled("div", {
  marginBottom: "$lg",
  fontFamily: "$rocko",
  color: "$navy",
  fontSize: "$md",
});

const Number = styled("span", {
  fontFamily: "$starborn",
  textTransform: "uppercase",
});

const Form = styled("div", {
  marginBottom: "$md",
  display: "flex",
});

const Input = styled("input", {
  background: "$navy",
  padding: "$md $xl",
  fontFamily: "$starborn",
  textTransform: "uppercase",
  color: "$cream",
  fontSize: "$md",
  border: "2px solid $navy",
  textAlign: "center",
  width: 100,
  outline: "none",
  "&:focus": {
    outline: "none",
    borderColor: "$navyLight",
  },
});

const Decrement = styled(Button, {
  padding: "$md $xl",
  borderRadius: "$button 0 0 $button",
});

const Increment = styled(Button, {
  padding: "$md $xl",
  borderRadius: "0 $button $button 0",
});

const Loading = styled("div", {
  fontSize: "$lg",
  fontFamily: "$starborn",
  textTransform: "uppercase",
  color: "$navy",
});

export const MintForm = ({ mint }) => {
  const [countdown, setCountdown] = useState();
  const [numberOfTokens, setNumberOfTokens] = useState(0);
  const { totalSupply, releaseTimestamp } = useMintDetails();
  const { provider, selectedAddress } = useWeb3Modal();
  const { tier, mintBalance } = useUserDetails(selectedAddress);
  const { mintPriceEther, maxMintAmount, mintTimestamp } = useTierDetails(tier);
  const tokensLeftToMint = maxMintAmount - mintBalance || 0;
  const enabled = numberOfTokens > 0 && maxMintAmount > 0;
  const starlisted = tier > 0;

  const loaded =
    countdown !== undefined &&
    totalSupply !== undefined &&
    releaseTimestamp !== undefined &&
    tier !== undefined &&
    mintBalance !== undefined &&
    mintPriceEther !== undefined &&
    maxMintAmount !== undefined &&
    mintTimestamp !== undefined;

  useEffect(() => {
    if (releaseTimestamp !== undefined && mintTimestamp !== undefined) {
      const timestamp =
        releaseTimestamp + mintTimestamp - new Date().getTime() / 1000;
      // Padd by 10 seconds
      setCountdown(timestamp + 10);
    }
  }, [releaseTimestamp, mintTimestamp]);

  useEffect(() => {
    if (countdown === undefined || countdown <= 0) {
      return;
    }

    const timer = setTimeout(() => {
      setCountdown((v) => v - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown]);

  useEffect(() => {
    setNumberOfTokens(tokensLeftToMint);
  }, [tokensLeftToMint]);

  const increment = () => {
    if (numberOfTokens === tokensLeftToMint) {
      return;
    }
    setNumberOfTokens(numberOfTokens + 1);
  };

  const decrement = () => {
    if (numberOfTokens === 0) {
      return;
    }
    setNumberOfTokens(numberOfTokens - 1);
  };

  const handleInputChange = (event) => {
    const value = parseInt(event.target.value);
    if (isNaN(value) || value < 1) {
      setNumberOfTokens(0);
      return;
    }
    if (value > tokensLeftToMint) {
      setNumberOfTokens(tokensLeftToMint);
      return;
    }
    setNumberOfTokens(value);
  };

  return (
    <>
      {loaded ? (
        <Background>
          <Container>
            {starlisted ? (
              <>
                <TotalSupply>{totalSupply}/10,000</TotalSupply>
                <Description>
                  You are allowed to mint <Number>{tokensLeftToMint}</Number>{" "}
                  {tokensLeftToMint !== 1 ? "starcatchers" : "starcatcher"}.
                </Description>
                {countdown > 0 ? (
                  <Timeleft>
                    {new Date(countdown * 1000).toISOString().substr(11, 8)}
                  </Timeleft>
                ) : (
                  <>
                    <Price>
                      <Number>{mintPriceEther}</Number> each
                    </Price>
                    <Form>
                      <Decrement onClick={decrement}>-</Decrement>
                      <Input
                        type="text"
                        value={numberOfTokens}
                        onChange={handleInputChange}
                      />
                      <Increment onClick={increment}>+</Increment>
                    </Form>
                    <Button
                      onClick={() =>
                        mint(
                          provider,
                          selectedAddress,
                          mintPriceEther,
                          numberOfTokens
                        )
                      }
                      disabled={!enabled}
                    >
                      Mint
                    </Button>
                  </>
                )}
              </>
            ) : (
              <Description>You are not starlisted.</Description>
            )}
          </Container>
        </Background>
      ) : (
        <Loading>Loading...</Loading>
      )}
    </>
  );
};
