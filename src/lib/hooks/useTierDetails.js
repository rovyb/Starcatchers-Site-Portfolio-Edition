import { useState, useEffect } from "react";
import { formatEther } from "ethers/lib/utils";
import { getTierDetails } from "@lib/ethereum/getTierDetails";

export const useTierDetails = (tier) => {
  const [tierDetails, setTierDetails] = useState({});

  useEffect(() => {
    if (tier === undefined) return;

    (async () => {
      const response = await getTierDetails(tier);

      const mintTimestamp = parseInt(response.wenOffset._hex);
      const mintPriceWei = response.priceWei.toString();
      const maxMintAmount = parseInt(response.maxAllowed._hex);

      setTierDetails({ mintTimestamp, mintPriceWei, mintPriceEther: formatEther(mintPriceWei), maxMintAmount });
    })();
  }, [tier]);

  return tierDetails;
};
