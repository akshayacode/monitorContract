const { ethers, upgrades } = require("hardhat");

async function main() {
  // Address of the existing proxy contract
  const proxyAddress = "0x47791E8435d6588FFbbd5976135ce1e800cDcc1e"; // Replace with your proxy contract address

  // Deploy the new version of the contract
  const NewDepositFunds = await ethers.getContractFactory(
    "UpdatedDepositFunds"
  ); // Replace with your new contract
  console.log("Upgrading DepositFunds contract...");

  // Upgrade the contract
  const upgradedContract = await upgrades.upgradeProxy(
    proxyAddress,
    NewDepositFunds
  );
  await upgradedContract.waitForDeployment();

  console.log("DepositFunds upgraded to:", await upgradedContract.getAddress());

  //Optionally, if you want to perform any post-upgrade actions, such as changing ownership or setting new values:
  //   const newOwner = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";
  //   const transferOwnershipTx = await upgradedContract.transferOwnership(
  //     newOwner
  //   );
  //   await transferOwnershipTx.wait();
  //   console.log(`Ownership transferred to: ${newOwner}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
