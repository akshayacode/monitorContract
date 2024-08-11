// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/utils/PausableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/utils/ReentrancyGuardUpgradeable.sol";  // Import ReentrancyGuard

contract UpdatedDepositFunds is Initializable, OwnableUpgradeable, PausableUpgradeable, ReentrancyGuardUpgradeable {  
    mapping(address => uint256) private balances;

    event Withdraw(address indexed user, uint256 amount);
    event Deposit(address indexed user, uint256 amount);

    function initialize() public initializer {
        __Ownable_init(msg.sender);
        __Pausable_init();
        __ReentrancyGuard_init();
       
    }

    function deposit() public payable whenNotPaused {
        require(msg.value > 0, "Please deposit some ETH");
        balances[msg.sender] += msg.value;
        emit Deposit(msg.sender, msg.value);
    }

    function withdraw() public whenNotPaused nonReentrant {  // Add nonReentrant modifier
        uint256 bal = balances[msg.sender];
        require(bal > 0, "Insufficient balance");

        balances[msg.sender] = 0;  // Reset the balance before transferring to prevent reentrancy attacks

        (bool sent, ) = msg.sender.call{value: bal}("");
        require(sent, "Failed to send Ether");

        emit Withdraw(msg.sender, bal);
    }

    function getBalance() public view returns (uint256) {
        return balances[msg.sender];
    }

    // Function to pause the contract (only callable by the owner)
    function pause() public onlyOwner {
        _pause();
        emit Paused(msg.sender);
    }

    // Function to unpause the contract (only callable by the owner)
    function unpause() public onlyOwner {
        _unpause();
        emit Unpaused(msg.sender);
    }

    // Fallback function to receive Ether
    receive() external payable {}
}
