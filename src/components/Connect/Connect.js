import { useEffect } from "react";
import { styled } from "@root/stitches.config";
import { useWeb3Modal } from "@lib/web3Modal/useWeb3Modal";
import { Button } from "@components/Button/Button";
import { Mint } from "@components/Mint/Mint";

const disabled = process.env.REACT_APP_DISABLE_MINT === "true";

const Background = styled("div", {
  backgroundColor: "$cream",
  padding: "$lg $md",
  marginBottom: -1,
});

const Container = styled("div", {
  maxWidth: "$container",
  margin: "0 auto",
  textAlign: "center",
});

export const Connect = () => {
  const { selectedAddress, connect, disconnect, web3Modal } = useWeb3Modal();

  useEffect(() => {
    if (web3Modal.cachedProvider) {
      (async () => {
        try {
          await connect();
        } catch (e) {
          disconnect();
          await connect();
        }
      })();
    }
    // We only want this to run once
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {selectedAddress ? (
        <Mint />
      ) : (
        <Background>
          <Container>
            {disabled ? (
              <Button disabled>Mint Coming Soon</Button>
            ) : (
              <Button onClick={connect}>Connect</Button>
            )}
          </Container>
        </Background>
      )}
    </>
  );
};
