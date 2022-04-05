import { ethers } from "ethers";
import ABI from "@lib/contract/ABI.json";
import getEthereumNetwork from "./getEthereumNetwork";

const ethereumProvider = getEthereumNetwork();
const apiKey = process.env.REACT_APP_ALCHEMY_KEY;
const contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS;

export const getTierDetails = async (tier) => {
  const provider = new ethers.providers.AlchemyProvider(
    ethereumProvider,
    apiKey
  );
  const contract = new ethers.Contract(contractAddress, ABI, provider);
  const tierDetails = await contract.Tiers(tier);

  return tierDetails;
};
