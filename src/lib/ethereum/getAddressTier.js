import { ethers } from "ethers";
import ABI from "@lib/contract/ABI.json";
import getEthereumNetwork from "./getEthereumNetwork";

const ethereumProvider = getEthereumNetwork();
const apiKey = process.env.REACT_APP_ALCHEMY_KEY;
const contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS;

export const getAddressTier = async (address) => {
  const provider = new ethers.providers.AlchemyProvider(
    ethereumProvider,
    apiKey
  );
  const contract = new ethers.Contract(contractAddress, ABI, provider);
  const tierLevel = await contract.addressStarlist(address);

  return parseInt(tierLevel);
};
