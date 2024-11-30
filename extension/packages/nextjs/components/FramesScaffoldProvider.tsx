import PropsWithChildren from "react";
import React from "react";
import WagmiProvider from "./providers/WagmiProvider";

// import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";
// import { DynamicContextProvider } from "@dynamic-labs/sdk-react-core";

export const FramesScaffoldProvider = ({ children }: PropsWithChildren) => {
  return <WagmiProvider>{children}</WagmiProvider>;
};
