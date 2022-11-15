// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const ONE_Hour_IN_SECS = 1 * 60 * 60;
  const unlockTime = currentTimestampInSeconds + ONE_Hour_IN_SECS;

  const lockedAmount = hre.ethers.utils.parseEther("0.05");

  const Lock = await hre.ethers.getContractFactory("Lock");
  const lock = await Lock.deploy(unlockTime, { value: lockedAmount });

  await lock.deployed();
  console.log(
    `Lock with ${lockedAmount} ETH and unlock timestamp ${unlockTime} deployed to ${lock.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


//部署时的参数
//Lock with 0.05 ETH and unlock timestamp 1668499709 deployed to 0xfd92EFa95a72379732E6702FBC65e6f653A8188B
//npx hardhat verify --network goerli 0xfd92EFa95a72379732E6702FBC65e6f653A8188B 1668499709
//npx hardhat verify --network localhost 0x5FbDB2315678afecb367f032d93F642f64180aa3 1668506144