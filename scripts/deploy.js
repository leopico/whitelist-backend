const hre = require("hardhat");

async function main() {
  const numAddresses = 10;
  const whitelistContract = await hre.ethers.getContractFactory("Whitelist");
  const deployWhitelistContract = await whitelistContract.deploy(numAddresses);

  await deployWhitelistContract.deployed();

  console.log(
    `with ${numAddresses} for adding num of addresses and  deployed to : ${deployWhitelistContract.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
