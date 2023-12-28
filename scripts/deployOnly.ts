import { ethers } from "hardhat";

async function main() {
  const Token = await ethers.getContractFactory("BasicContract");
  const token = await Token.deploy();
  console.log("Token Address-> ", token.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log("Deploy error-> ", error);
    process.exit(1);
  });
