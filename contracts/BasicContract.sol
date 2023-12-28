// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract BasicContract {
    string message = "Hello Coders!";

    event Messages(string oldMessage, string newMessage, address changedBy);

    function updateMessage(string memory _newMessage) public {
        emit Messages(message, _newMessage, msg.sender);
        message = _newMessage;
    }

    function getMessage() public view returns (string memory) {
        return message;
    }
}
