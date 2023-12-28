import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";

import { basicMethod } from "./index";

describe("Basic Contract", () => {
  it("Should check Message ", async () => {
    const { deployer, hardhatToken } = await loadFixture(basicMethod);
    expect(await hardhatToken.getMessage()).to.be.equal("Hello Coders!");
  });

  it("Should check Update Message ", async () => {
    const { deployer, hardhatToken } = await loadFixture(basicMethod);

    await hardhatToken.updateMessage("Update New Message!");

    expect(await hardhatToken.getMessage()).to.be.equal("Update New Message!");
  });

  it("Should check Event Value ", async () => {
    const { deployer, hardhatToken, users } = await loadFixture(basicMethod);

    await hardhatToken.updateMessage("Update New Message!");

    expect(await hardhatToken.getMessage())
      .to.emit(hardhatToken, "Messages")
      .withArgs("Hello Coders!", "Update New Message!", users[0].address);
  });
});
