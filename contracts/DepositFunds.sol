// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

//import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/utils/PausableUpgradeable.sol";
import "@openzeppelin/contracts/proxy/beacon/BeaconProxy.sol";

contract DepositFunds is Initializable, OwnableUpgradeable, PausableUpgradeable {
   //using SafeMathUpgradeable for uint256;
    mapping(address => uint256) private balances;

    event Withdraw(address indexed  user, uint256 amount);
    event Deposit(address indexed  user, uint256 amount);
    
    function initialize() public initializer {
        __Ownable_init(msg.sender);
        __Pausable_init();
    }

    function deposit() public payable  {
        require(msg.value > 0, "Please deposit some ETH");
        balances[msg.sender] += msg.value;
        emit Deposit(msg.sender, msg.value);
    }

    function withdraw() public  whenNotPaused {
        uint256 bal = balances[msg.sender];
        require(bal > 0, "Insufficient balance");

        (bool sent, ) = msg.sender.call{value: bal}("");
         balances[msg.sender] = 0;
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
