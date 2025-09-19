# Assignment 2 — DIDLab ERC-20 Deployment

## Part A — Deployment

- **Contract Address:** `0x85c4d71ef0ab2167c0272da02f2588d3aadcd85c8d805a71270b9b8f16b9ba8b`
- **Symbol:** `CAMP`
- **Decimals:** `18`
- **Initial Supply (human-readable):** `1,000,000 CAMP`
- **Initial Supply (raw, wei):** `1000000000000000000000000`
- **Compiler Version:** `0.8.24`
- **Scripts Used:**
  - `npx hardhat compile`
  - `npx hardhat run scripts/deploy.ts --network didlab`
  - `npx hardhat run scripts/interact.ts --network didlab`
  - `npx hardhat run scripts/analyze.ts --network didlab`

## Part B — Transaction Details
![Image](https://github.com/user-attachments/assets/50994f05-ac30-459a-9a97-9574db1c059b)

## Part C — Fee Comparison (Tx1 vs Tx2)

- **Transaction Order:**  
  TX1 landed first, followed by TX2.

- **Gas Fees Comparison:**  
  - **Higher Effective Gas Price:** TX2  
  - **Higher Priority Tip:** TX2  

- **EIP-1559 Explanation:**  
  Ethereum’s EIP-1559 fee model splits gas into two components:  
  1. **Base Fee:** The mandatory minimum fee per gas, burned by the network.  
  2. **Priority Tip (Max Priority Fee):** An optional tip paid to miners to incentivize faster inclusion in a block.  

  The **effective gas price** is calculated as the sum of the base fee and the priority tip actually paid. A higher tip often results in faster confirmation.

## Part D — Decimals & Conversion

**Raw Value:** 100000000000000000000  
- **Human-readable Value:** 100000000000000000000 ÷ 10^18 = 100 CAMP tokens  
- **Calculation:** 100000000000000000000 / 1000000000000000000 = 100

This illustrates that ERC-20 tokens typically use 18 decimal places. To interpret the token amount in a readable format, you divide the raw value by 10^18, converting from the smallest unit (similar to wei in ETH) to the standard token amount.
