/**
 * This file is autogenerated by Scaffold-ETH.
 * You should not edit it manually or your changes might be overwritten.
 */
import { GenericContractsDeclaration } from "~~/utils/scaffold-eth/contract";

const deployedContracts = {
  545: {
    QuestionMarkGame: {
      address: "0x04F57ED591636042fAa09aC33861EB0f23C4ae6e",
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
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256[4]",
              name: "arr",
              type: "uint256[4]",
            },
          ],
          name: "countUnique",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
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
          ],
          name: "generatePermutation",
          outputs: [
            {
              internalType: "uint256[7][7]",
              name: "board",
              type: "uint256[7][7]",
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
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          name: "maxNumCorrectPerBoard",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          name: "numCorrectPerBoardPerPlayer",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
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
              internalType: "address",
              name: "user",
              type: "address",
            },
          ],
          name: "viewNumCorrectPerBoardPerPlayer",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          name: "winnerPerBoard",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
      ],
      inheritedFunctions: {},
    },
  },
  31337: {
    QuestionMarkGame: {
      address: "0x610178dA211FEF7D417bC0e6FeD39F05609AD788",
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
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256[4]",
              name: "arr",
              type: "uint256[4]",
            },
          ],
          name: "countUnique",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
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
          ],
          name: "generatePermutation",
          outputs: [
            {
              internalType: "uint256[7][7]",
              name: "board",
              type: "uint256[7][7]",
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
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          name: "maxNumCorrectPerBoard",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          name: "numCorrectPerBoardPerPlayer",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
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
              internalType: "address",
              name: "user",
              type: "address",
            },
          ],
          name: "viewNumCorrectPerBoardPerPlayer",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          name: "winnerPerBoard",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
      ],
      inheritedFunctions: {},
    },
  },
  11155111: {
    QuestionMarkGame: {
      address: "0xEff1a745450fA2eCEe1f84991dCD09DbC73cF483",
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
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256[4]",
              name: "arr",
              type: "uint256[4]",
            },
          ],
          name: "countUnique",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
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
          ],
          name: "generatePermutation",
          outputs: [
            {
              internalType: "uint256[7][7]",
              name: "board",
              type: "uint256[7][7]",
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
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          name: "maxNumCorrectPerBoard",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          name: "numCorrectPerBoardPerPlayer",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
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
              internalType: "address",
              name: "user",
              type: "address",
            },
          ],
          name: "viewNumCorrectPerBoardPerPlayer",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          name: "winnerPerBoard",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
      ],
      inheritedFunctions: {},
    },
  },
  37084624: {
    QuestionMarkGame: {
      address: "0x19604C37bc3C06ff64c5eFBAcB3155efB34aA02e",
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
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256[4]",
              name: "arr",
              type: "uint256[4]",
            },
          ],
          name: "countUnique",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
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
          ],
          name: "generatePermutation",
          outputs: [
            {
              internalType: "uint256[7][7]",
              name: "board",
              type: "uint256[7][7]",
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
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          name: "maxNumCorrectPerBoard",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          name: "numCorrectPerBoardPerPlayer",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
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
              internalType: "address",
              name: "user",
              type: "address",
            },
          ],
          name: "viewNumCorrectPerBoardPerPlayer",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          name: "winnerPerBoard",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
      ],
      inheritedFunctions: {},
    },
  },
} as const;

export default deployedContracts satisfies GenericContractsDeclaration;
