import { ethers } from "ethers";
import getEthereumNetwork from "./getEthereumNetwork";
import ABI from "@lib/contract/ABI.json";

const ethereumProvider = getEthereumNetwork();
const apiKey = process.env.REACT_APP_ALCHEMY_KEY;
const contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS;

export const addressMintBalance = async (address) => {
  const provider = new ethers.providers.AlchemyProvider(
    ethereumProvider,
    apiKey
  );
  const contract = new ethers.Contract(contractAddress, ABI, provider);
  const mintBalance = await contract.addressMintBalance(address);

  return parseInt(mintBalance._hex);
};
