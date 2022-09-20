const { expect, assert } = require('chai');
const { ethers } = require('hardhat');

describe('UserStorage', function () {
  let UserStorageFactory, userStorage;

  beforeEach(async function () {
    UserStorageFactory = await ethers.getContractFactory('UserStorage');
    userStorage = await UserStorageFactory.deploy();
    await userStorage.deployed();
  });

  it('Should start with count = 0', async function () {
    const count = await userStorage.count();

    assert.equal(count, 0);
  });

  it('Should start with an empty array', async function () {
    const users = await userStorage.getAllUsers();

    assert.equal(users.length, 0);
  });

  it('Should store a new user', async function () {
    const user = {
      name: 'Peter Griffin',
      age: 50,
    };

    await userStorage.addUser(user.name, user.age);

    const count = await userStorage.count();

    assert.equal(count, 1);
  });

  it('Should clear the users', async function () {
    const user = {
      name: 'Peter Griffin',
      age: 50,
    };

    let count = 0;

    await userStorage.addUser(user.name, user.age);

    count = await userStorage.count();
    assert.equal(count, 1);

    await userStorage.clearAllUsers();

    count = await userStorage.count();
    assert.equal(count, 0);
  });

  it('Should return the users age', async function () {
    const user = {
      name: 'Peter Griffin',
      age: 50,
    };

    await userStorage.addUser(user.name, user.age);

    const age = await userStorage.getAgeByName(user.name);

    expect(age).to.equal(user.age);
  });

  it('Should return the user with the given id', async function () {
    const user = {
      name: 'Peter Griffin',
      age: 50,
    };

    await userStorage.addUser(user.name, user.age);

    const userResponse = await userStorage.getUserById(1);

    expect(userResponse.age).to.equal(user.age);
    expect(userResponse.name).to.equal(user.name);
  });
});
