import { useState } from "react";
import { mintStarlist } from "../../lib/ethereum/mintStarlist";
import { getTransaction } from "../../lib/ethereum/getTransaction";
import { MintForm } from "./MintForm";
import { Transaction } from "./Transaction";
import { styled } from "@root/stitches.config";
import { useWeb3Modal } from "@lib/web3Modal/useWeb3Modal";
import getChainId from "@lib/ethereum/getChainId";
import getEthereumNetwork from "@lib/ethereum/getEthereumNetwork";

const networkName = getEthereumNetwork()
const requiredChain = getChainId();


const Container = styled("div", {
  backgroundColor: "$cream",
  textAlign: "center",
})

const ChainSelect = styled("div", {
  fontSize: "$md",
  color: "$navy"
})

export const Mint = () => {
  const [pending, setPending] = useState(false);
  const [transactionError, setTransactionError] = useState();
  const [transactionStatus, setTransactionStatus] = useState();
  const [transactionHash, setTransactionHash] = useState();
  const { chainId } = useWeb3Modal();

  const mint = async (
    provider,
    selectedAddress,
    mintPriceEther,
    numberOfTokens
  ) => {
    const [hash, error] = await mintStarlist(
      provider,
      selectedAddress,
      parseFloat(mintPriceEther),
      numberOfTokens
    );

    if (error) {
      setTransactionError(error);
      return;
    }

    if (hash) {
      setPending(true);
      setTransactionHash(hash);
    }

    const details = await getTransaction(hash);

    if (details) {
      setTransactionStatus(details.status);
    }
  };

  const back = () => {
    setPending(false);
    setTransactionStatus(undefined);
    setTransactionHash(undefined);
    setTransactionError(undefined);
  }

  return (
    <Container>
      {pending ? (
        <Transaction
          pending={pending}
          status={transactionStatus}
          hash={transactionHash}
          error={transactionError}
          back={back}
        />
      ) : (
        <>
         {chainId !== requiredChain ? <ChainSelect>
           Please switch to chain "{networkName}"
         </ChainSelect> : <MintForm mint={mint} />}
        </>
      )}
    </Container>
  );
};
