import { styled } from "@root/stitches.config";
import { keyframes } from "@stitches/react";
import comet from "@assets/images/comet.png";
import txError from "@assets/images/tx-error.png";
import txSuccess from "@assets/images/tx-success.png";
import getEthereumNetwork from "@lib/ethereum/getEthereumNetwork";

const networkName = getEthereumNetwork();

const Container = styled("div", {
  background: "$cream",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const shake = keyframes({
  "0%": { transform: "translate(4px, 2px) rotate(0deg)" },
  "10%": { transform: "translate(-2px, -4px) rotate(-2deg)" },
  "20%": { transform: "translate(-6px, 0px) rotate(2deg)" },
  "30%": { transform: "translate(0px, 4px) rotate(0deg)" },
  "40%": { transform: "translate(2px, -2px) rotate(2deg)" },
  "50%": { transform: "translate(-2px, 4px) rotate(-2deg)" },
  "60%": { transform: "translate(-6px, 2px) rotate(0deg)" },
  "70%": { transform: "translate(4px, 2px) rotate(-2deg)" },
  "80%": { transform: "translate(-2px, -2px) rotate(2deg)" },
  "90%": { transform: "translate(4px, 4px) rotate(0deg)" },
  "100%": { transform: "translate(4px, 2px) rotate(0deg)" },
});

const Comet = styled("img", {
  animation: `${shake} 3s infinite linear`,
});

const Pending = styled("div", {
  marginTop: "$md",
  fontFamily: "$rocko",
  fontSize: "$md",
  color: "$navy",
});

const Success = styled("div", {
  marginTop: "$md",
  fontFamily: "$rocko",
  fontSize: "$md",
  background: "$purple",
  color: "$cream",
  borderRadius: 10,
  padding: "5px 10px",
});

const Error = styled("div", {
  marginTop: "$md",
  fontFamily: "$rocko",
  fontSize: "$md",
  background: "$pink",
  color: "$cream",
  borderRadius: 10,
  padding: "5px 10px",
});

const Link = styled("a", {
  marginTop: "$md",
  fontFamily: "$rocko",
  fontSize: "$xs",
  background: "$navy",
  color: "$cream",
  borderRadius: 20,
  padding: "5px 20px",
});

const Back = styled("button", {
  marginTop: "$md",
  fontFamily: "$rocko",
  fontSize: "$xs",
  color: "$navy",
  border: "none"
});

const errors = {
  "-3602": "Error: Invalid parameters",
  "-3603": "Error: Unexpected",
};

export const Transaction = ({ pending, status, hash, error, back }) => {
  const etherscanURL =
    networkName === "mainnet"
      ? `https://etherscan.io/tx/${hash}`
      : `https://rinkeby.etherscan.io/tx/${hash}`;
  return (
    <Container>
      {status === undefined && (
        <Comet src={comet} style={{ height: 120 }} alt="Comet" />
      )}
      {status === 1 && (
        <img src={txSuccess} style={{ height: 120 }} alt="Cool Starcatcher" />
      )}
      {status === 0 && (
        <img src={txError} style={{ height: 120 }} alt="Sad Starcatcher" />
      )}
      {pending && status === undefined && (
        <Pending>Transaction pending...</Pending>
      )}
      {status === 1 && <Success>Transaction successful!</Success>}
      {status === 0 && <Error>Transaction failed</Error>}
      {error && (
        <Error>
          {errors[error] ? errors[error] : "Error: Unable to send transcation"}
        </Error>
      )}
      {hash && (
        <Link
          href={etherscanURL}
          target="_blank"
          rel="noreferrer"
        >
          View on Etherscan
        </Link>
      )}
      {(status === 1 || status === 0) && <Back onClick={back}>Back</Back>}
    </Container>
  );
};
