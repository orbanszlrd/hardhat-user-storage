require('@nomicfoundation/hardhat-toolbox');
require('@nomiclabs/hardhat-etherscan');
require('dotenv').config();
require('hardhat-gas-reporter');
require('solidity-coverage');

require('./tasks/accounts');
require('./tasks/block-number');

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: 'hardhat',
  etherscan: {
    apiKey: process.env.ETERSCAN_API_KEY,
  },
  gasReporter: {
    enabled: true,
  },
  networks: {
    localhost: {
      url: 'http://127.0.0.1:8545',
      chainId: 31337,
    },
    ganache: {
      url: process.env.GANACHE_RPC_URL,
      accounts: [process.env.GANACHE_PRIVATE_KEY],
      chainId: 1337,
    },
    goerli: {
      url: process.env.GOERLI_RPC_URL,
      accounts: [process.env.ACCOUNT_PRIVATE_KEY],
      chainId: 5,
    },
  },
  solidity: '0.8.17',
};
