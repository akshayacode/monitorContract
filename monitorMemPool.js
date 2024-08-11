require("dotenv").config();
const { ethers, JsonRpcProvider, BigNumber } = require("ethers");
const fs = require("fs");
const path = require("path");

// Configuration for the provider and contract
const provider = new JsonRpcProvider("http://127.0.0.1:8545");
const wallet = new ethers.Wallet(process.env.HARDHAT_PRIVATE_KEY, provider);

const contractAddress = process.env.CONTRACT_ADDRESS;
const contractABI = JSON.parse(
  fs.readFileSync(path.join(__dirname, "DepositFundsABI.json"))
);

const contract = new ethers.Contract(contractAddress, contractABI, provider);

// Variables to track the frequency of withdraw calls
let withdrawCalls = [];
const maxCalls = 3; // Max allowed calls within the time frame
const timeFrame = 60000; // Time frame in milliseconds (e.g., 1 minute)

// Monitor the Withdraw event
contract.on("Withdraw", async (user, amount) => {
  try {
    console.log("I am getting executed");
    const now = Date.now();
    withdrawCalls.push(now);

    withdrawCalls = withdrawCalls.filter((time) => now - time <= timeFrame);

    console.log(
      `Withdraw event detected: User ${user} withdrew ${ethers.formatEther(
        amount
      )} ETH`
    );

    if (withdrawCalls.length > maxCalls) {
      pauseContract();
    }
  } catch (error) {
    console.error("Error in event listener:", error);
  }
});

async function getNextNonce() {
  return await provider.getTransactionCount(wallet.address, "pending");
}

async function pauseContract() {
  try {
    // Fetch current gas price from the provider
    let gasPrice = (await provider.getFeeData()).gasPrice;
    //const estimatedGas = await contract.estimatedGas.pause();

    console.log("gasPrice", gasPrice);

    // Optional: Increase the gas price by a percentage for priority
    const priorityFactor = 1.2; // Increase gas price by 20%
    gasPrice =
      (gasPrice * BigInt(Math.floor(priorityFactor * 100))) / BigInt(100);

    const nonce = await getNextNonce();

    // Send the transaction with the dynamically calculated gas price
    const tx = await contract.connect(wallet).pause({
      gasPrice: gasPrice,
      //nonce: nonce,
    });

    console.log(`Contract paused. Transaction hash: ${tx.hash}`);
    //await provider.send("evm_mine");
    await tx.wait();
  } catch (error) {
    console.error("Error pausing contract:", error);
  }
}

console.log("Listening for Withdraw events...");
