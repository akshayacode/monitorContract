require("dotenv").config();
const { ethers, JsonRpcProvider } = require("ethers");
const nodemailer = require("nodemailer");
const fs = require("fs");
const path = require("path");

// Configuration for the provider and contract
const provider = new JsonRpcProvider("http://127.0.0.1:8545");

const contractAddress = process.env.CONTRACT_ADDRESS;
const contractABI = JSON.parse(
  fs.readFileSync(path.join(__dirname, "DepositFundsABI.json"))
);

const contract = new ethers.Contract(contractAddress, contractABI, provider);

// Email setup using Nodemailer
let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com", // SMTP server address (usually mail.your-domain.com)
  port: 465, // Port for SMTP (usually 465)
  secure: true, // Usually true if connecting to port 465
  auth: {
    user: process.env.FROM_EMAIL, // Your email address
    pass: process.env.EMAIL_PASSWORD, // Password (for gmail, your app password)
  },
});

// Variables to track the frequency of withdraw calls
let withdrawCalls = [];
const maxCalls = 3; // Max allowed calls within the time frame
const timeFrame = 60000; // Time frame in milliseconds (e.g., 1 minute)

const sendEmail = (user) => {
  const mailOptions = {
    from: process.env.FROM_EMAIL,
    to: process.env.TO_EMAIL,
    subject: "Withdraw Function Called Too Frequently",
    text: `The withdraw function was called multiple times in a short period by user ${user}. Please investigate.`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
    } else {
      console.log("Email sent:", info.response);
    }
  });
};

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
      sendEmail(user);
    }
  } catch (error) {
    console.error("Error in event listener:", error);
  }
});

console.log("Listening for Withdraw events...");
