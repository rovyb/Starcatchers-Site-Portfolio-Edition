import { useContext } from "react";
import { Web3ModalContext } from "./Web3Modal";

export const useWeb3Modal = () => {
  const context = useContext(Web3ModalContext);

  if (!context) {
    throw new Error("`useWeb3Modal` should be used within a `Web3ModalContext`");
  }

  return context;
};
