/**
 * This file is autogenerated by Scaffold-ETH.
 * You should not edit it manually or your changes might be overwritten.
 */
import { GenericContractsDeclaration } from "~~/utils/scaffold-eth/contract";

const deployedContracts = {
  31337: {
    QuestionMarkGame: {
      address: "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9",
      abi: [
        {
          inputs: [
            {
              internalType: "uint256",
              name: "seed",
              type: "uint256",
            },
          ],
          name: "claimWin",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "seed",
              type: "uint256",
            },
          ],
          name: "generatePermutation",
          outputs: [
            {
              internalType: "uint256[3][3]",
              name: "board",
              type: "uint256[3][3]",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "seed",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "targetCard",
              type: "uint256",
            },
            {
              internalType: "uint256[2]",
              name: "guessCoordinates",
              type: "uint256[2]",
            },
          ],
          name: "guess",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
      inheritedFunctions: {},
    },
  },
} as const;

export default deployedContracts satisfies GenericContractsDeclaration;
