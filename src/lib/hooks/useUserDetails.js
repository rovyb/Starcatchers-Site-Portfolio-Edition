import { useState, useEffect } from "react";
import { getAddressTier } from "@lib/ethereum/getAddressTier";
import { addressMintBalance } from "@lib/ethereum/addressMintBalance";

export const useUserDetails = (address) => {
  const [tier, setTier] = useState();
  const [mintBalance, setMintBalance] = useState(0);

  useEffect(() => {
    if (address === undefined) {
      setTier(0);
      setMintBalance(0);
      return;
    }

    (async () => {
      const userTier = await getAddressTier(address);
      setTier(userTier);

      const addressBalance = await addressMintBalance(address);
      setMintBalance(addressBalance);
    })();
  }, [address]);

  return { tier, mintBalance };
};
