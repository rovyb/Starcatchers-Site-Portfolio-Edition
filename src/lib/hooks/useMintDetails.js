import { useEffect, useState } from "react";
import { getTotalSupply } from "@lib/ethereum/getTotalSupply";
import { getReleaseTimestamp } from "@lib/ethereum/getReleaseTimestamp";

export const useMintDetails = () => {
  const [totalSupply, setTotalSupply] = useState();
  const [releaseTimestamp, setReleaseTimestamp] = useState();

  useEffect(() => {
    (async () => {
      const supply = await getTotalSupply();
      setTotalSupply(supply);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const releaseTime = await getReleaseTimestamp();
      setReleaseTimestamp(releaseTime);
    })();
  }, []);

  return { totalSupply, releaseTimestamp };
};
