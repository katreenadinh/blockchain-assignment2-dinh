import { HardhatUserConfig } from "hardhat/config";
import "dotenv/config";
import "@nomicfoundation/hardhat-viem";

// Required env (see next step)
const RPC_URL = process.env.RPC_URL!;
const CHAIN_ID = Number(process.env.CHAIN_ID || "0");
const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.24",
    settings: { optimizer: { enabled: true, runs: 200 } },
  },
  networks: {// Your team’s DIDLab chain (HTTP)
    didlab: {
      url: RPC_URL,
      chainId: CHAIN_ID,
      // Hardhat v3 HTTP network
      type: "http",
    },
    // Local fallback if you ever need it (not used in this assignment)
    hardhat: {
      type: "edr-simulated",
      initialBaseFeePerGas: 1_000_000_000, // 1 gwei for EIP-1559 fields
    },
  },
};

export default config;