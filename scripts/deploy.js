const hre = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);
  console.log("Account balance:", (await deployer.getBalance()).toString());

  const Tofu = await ethers.getContractFactory("Tofu");
  const tofu = await Tofu.deploy("name", "symbol");

  await tofu.deployed();

  console.log("Tofu deployed to:", tofu.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
