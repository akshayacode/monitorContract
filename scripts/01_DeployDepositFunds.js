const { ethers, upgrades } = require("hardhat");
const { utils, BigNumber } = require("ethers");

async function main() {
  // Address to transfer ownership to
  const newOwner = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";

  // Amount to deposit (in Ether)
  const depositAmount = ethers.parseEther("1");

  // Deploy the proxy contract
  const DepositFunds = await ethers.getContractFactory("DepositFunds");
  console.log("Deploying DepositFunds proxy...");
  const depositFunds = await upgrades.deployProxy(DepositFunds, {
    initializer: "initialize",
  });
  await depositFunds.waitForDeployment();
  console.log("DepositFunds deployed to:", await depositFunds.getAddress());
  const addr = await depositFunds.getAddress();
  //console.log("Proxy address", await upgrades.erc1967.getBeaconAddress(addr));
  console.log(
    "implementation address",
    await upgrades.erc1967.getImplementationAddress(addr)
  );

  // Transfer ownership to the specified address
  //   const transferOwnershipTx = await depositFunds.transferOwnership(newOwner);
  //   await transferOwnershipTx.wait();
  //   console.log(`Ownership transferred to: ${newOwner}`);

  //   // Call the deposit function with the specified amount of Ether
  //   const depositTx = await depositFunds.deposit({ value: depositAmount });
  //   await depositTx.wait();
  //   console.log(`Deposited ETH .`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
