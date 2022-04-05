import { createContext, useState } from "react";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import WalletLink from "walletlink";
import getEthereumNetwork from "@lib/ethereum/getEthereumNetwork";
import getChainId from "@lib/ethereum/getChainId";

export const Web3ModalContext = createContext(undefined);

const chainId = getChainId();
const network = getEthereumNetwork();
const rpcURL = `https://eth-rinkeby.alchemyapi.io/v2/${process.env.REACT_APP_ALCHEMY_KEY}`;

const web3Modal = new Web3Modal({
  network: network,
  cacheProvider: true,
  providerOptions: {
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        rpc: {
          [chainId]: rpcURL,
        },
      },
    },
    walletlink: {
      package: WalletLink, // Required
      options: {
        appName: "StarcatchersNFT", // Required
        rpc: rpcURL, // Optional if `infuraId` is provided; otherwise it's required
        chainId: chainId, // Optional. It defaults to 1 if not provided
        darkMode: true, // Optional. Use dark theme, defaults to false
      },
    },
  },
  theme: {
    background: "#171c30",
    main: "#ece1c0",
    secondary: "#a49d88",
    border: "#3b4775",
    hover: "#131522",
  },
});

export const Web3ModalProvider = ({ children }) => {
  const [selectedAddress, setSelectedAddress] = useState(undefined);
  const [chainId, setChainId] = useState(undefined);
  const [web3Provider, setWeb3Provider] = useState(undefined);

  const connect = async () => {
    try {
      const instance = await web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(instance);
      const accounts = await provider.listAccounts();
      const { chainId } = await provider.getNetwork();
      setWeb3Provider(provider);
      setSelectedAddress(accounts[0]);
      setChainId(chainId);

      instance.on("accountsChanged", async (accounts) => {
        if (accounts.length === 0) {
          disconnect();
          return;
        }

        setSelectedAddress(accounts[0]);
      });

      instance.on("chainChanged", async (chainId) => {
        if (chainId === "0x4") setChainId(4);
        if (chainId === "0x1") setChainId(1);
      });
    } catch (e) {
      disconnect();
    }
  };

  const disconnect = () => {
    web3Modal.clearCachedProvider();
    setSelectedAddress(undefined);
    setChainId(undefined);
    setWeb3Provider(undefined);
  };

  return (
    <Web3ModalContext.Provider
      value={{
        selectedAddress,
        chainId,
        provider: web3Provider,
        connect,
        web3Modal,
        disconnect,
      }}
    >
      {children}
    </Web3ModalContext.Provider>
  );
};
