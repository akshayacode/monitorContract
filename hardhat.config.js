require("@nomicfoundation/hardhat-toolbox");
require("@openzeppelin/hardhat-upgrades");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    hardhat: {
      mining: {
        auto: true, // Disable auto-mining
      },
    },
    amoy: {
      chainId: 80002,
      url: "https://rpc-amoy.polygon.technology/",
      accounts: [`0x${process.env.FINAL_PRIVATE_KEY}`],
      gas: "auto",
      gasPrice: "auto",
    },
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
};
