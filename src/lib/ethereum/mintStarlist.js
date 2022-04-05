import { ethers } from "ethers";
import ABI from "@lib/contract/ABI.json";

export const mintStarlist = async (
  provider,
  address,
  mintPrice,
  numberOfTokens = 1
) => {
  const contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS;
  const mintInterface = new ethers.utils.Interface(ABI);
  const data = mintInterface.encodeFunctionData("ascend_starlist_abf", [numberOfTokens]);

  const gasPrice = await provider.getGasPrice()._hex;
  const value = (mintPrice * numberOfTokens).toFixed(6).toString();

  const parameters = {
    gasPrice,
    from: address,
    to: contractAddress,
    value: ethers.utils.parseEther(value)._hex,
    data,
  };

  try {
    const hash = await provider.provider.request({
      method: "eth_sendTransaction",
      params: [parameters],
    });
    return [hash, null];
  } catch (error) {
    return [null, error.code];
  }
};
