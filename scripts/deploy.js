const { ethers, run, network } = require('hardhat');

async function main() {
  const UserStorageFactory = await ethers.getContractFactory('UserStorage');

  console.log('Deploying contract...');

  const userStorage = await UserStorageFactory.deploy();
  await userStorage.deployed();

  console.log(`Deployed to ${userStorage.address}`);

  if (network.config.chainId === 31337 || network.config.chainId === 1337) {
    console.log('You are on a local network, verification is not needed!');
  } else {
    console.log('Verification needed!');

    if (process.env.ETERSCAN_API_KEY) {
      await userStorage.deployTransaction.wait(6);
      await verify(userStorage.address, []);
    }
  }
}

async function verify(contractAddress, args) {
  console.log('Verifying contract..');

  try {
    await run('verify:verify', {
      address: contractAddress,
      constructorArguments: args,
    });
  } catch (error) {
    console.log(error);
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
