import { ethers } from "ethers";
import getEthereumNetwork from "./getEthereumNetwork";

const ethereumProvider = getEthereumNetwork();
const apiKey = process.env.REACT_APP_ALCHEMY_KEY;

export const getTransaction = async (hash) => {
  const provider = new ethers.providers.AlchemyProvider(
    ethereumProvider,
    apiKey
  );
  const transaction = await provider.waitForTransaction(hash, 1, 900000);

  return transaction;
};
