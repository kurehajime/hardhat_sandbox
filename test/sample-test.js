const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Tofu", function () {
  it("Should return the new greeting once it's changed", async function () {
    const Tofu = await ethers.getContractFactory("Tofu");
    const tofu = await Tofu.deploy();
    await tofu.deployed();
  });
});
