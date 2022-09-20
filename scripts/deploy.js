const { ethers } = require('hardhat');

async function main() {
  const UserStorageFactory = await ethers.getContractFactory('UserStorage');

  console.log('Deploying contract...');

  const userStorage = await UserStorageFactory.deploy();
  await userStorage.deployed();

  console.log(`Deployed to ${userStorage.address}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
