require("@nomicfoundation/hardhat-toolbox");

//alchemy的api key
const ALCHEMY_API_KEY = "XifKCJ-fF3_1ITGi1-skTL7PPf_UTd_8";
//一个goerli测试账户的private key
const GOERLI_PRIVATE_KEY = "5f8d5420508a5f46fe7985a92c9b61ef48c1562d4ab11de2095db524d958d82c";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  etherscan: {
    apiKey: "7Q7G6CHXD3HSKZNDAQ3G7G7BEUCTQKQJA7",
  },

  networks: {
    goerli: {
      url: `https://eth-goerli.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [GOERLI_PRIVATE_KEY],
    },
  },
};
