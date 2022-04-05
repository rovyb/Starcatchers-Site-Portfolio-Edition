export const getEthereumNetwork = () => {
  const env = process.env.REACT_APP_ETH_NETWORK;
  if (env !== undefined) {
    return env;
  }

  // Return rinkeby if no eth network supplied
  return "rinkeby";
}

export default getEthereumNetwork;
