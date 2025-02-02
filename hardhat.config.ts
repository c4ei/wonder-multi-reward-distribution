import { task } from "hardhat/config";
import "@nomiclabs/hardhat-waffle";
import '@typechain/hardhat';
import '@nomiclabs/hardhat-ethers';
import "dotenv/config";  // yarn add --dev dotenv

// const HDWalletProvider = require('@truffle/hdwallet-provider');
// const provider = new HDWalletProvider({ 
//   privateKeys:[process.env.PK]
//   ,providerOrUrl:'https://rpc.c4ei.net'}
//   )

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  networks: {
    hardhat: {
      allowUnlimitedContractSize: true,
    },
    c4ei: {
      allowUnlimitedContractSize: true,
      url: "https://rpc.c4ei.net",
      accounts: [process.env.PK || ''],
      chainId: 21004
    },
    // ropsten: {
    //   url: `https://ropsten.infura.io/v3/${process.env.INFURA_API_KEY}`,
    //   accounts: [process.env.ADMIN || ''],
    //   chainId: 3,
    // },
  },
  solidity: {
    compilers: [
      { version: "0.7.5" },
      { version: "0.8.0" },
    ]
  },
  settings: {
    optimizer: {
      enabled: true,
      runs: 600
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 200000
  },
  typechain: {
    target: 'ethers-v5',
    alwaysGenerateOverloads: false,
  }
};
