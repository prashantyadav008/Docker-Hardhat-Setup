import { ethers } from "hardhat";
const hre = require("hardhat");

async function main() {
  //Deploy BasicContract Contract
  const Token = await ethers.getContractFactory("BasicContract");
  const token = await Token.deploy();

  await token.deployTransaction.wait(5);

  await hre.run("verify:verify", {
    address: token.address,
    contract: "contracts/BasicContract.sol:BasicContract",
  });

  console.log("Basic Contract Address-> ", token.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log("Deploy error-> ", error);
    process.exit(1);
  });
