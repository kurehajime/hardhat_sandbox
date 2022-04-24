require('dotenv').config()
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY;
const ROPSTEN_PRIVATE_KEY = process.env.ROPSTEN_PRIVATE_KEY;
const ETHERSCAN_KEY = process.env.ETHERSCAN_KEY;
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    ropsten: {
      url: `https://eth-ropsten.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [`${ROPSTEN_PRIVATE_KEY}`],
    },
  },
  etherscan: {
    apiKey: `${ETHERSCAN_KEY}`
  }
};
