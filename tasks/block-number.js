const { task } = require('hardhat/config');

task('block-number', 'Prints current block number', async (taskArgs, hre) => {
  const blockNumber = await hre.ethers.provider.getBlockNumber();
  console.log(`Current block number: ${blockNumber}`);
});
