require('@nomicfoundation/hardhat-toolbox');
require('@nomiclabs/hardhat-etherscan');
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: 'hardhat',
  etherscan: {
    apiKey: process.env.ETERSCAN_API_KEY,
  },
  networks: {
    goerli: {
      url: process.env.GOERLI_RPC_URL,
      accounts: [process.env.ACCOUNT_PRIVATE_KEY],
      chainId: 5,
    },
    ganache: {
      url: process.env.GANACHE_RPC_URL,
      accounts: [process.env.GANACHE_PRIVATE_KEY],
      chainId: 1337,
    },
  },
  solidity: '0.8.17',
};
