export const getChainId = () => {
  const env = process.env.REACT_APP_ETH_NETWORK;
  if (env === "mainnet") {
    return 1;
  }

  // Return rinkeby if mainnet not specified
  return 4;
};

export default getChainId;
