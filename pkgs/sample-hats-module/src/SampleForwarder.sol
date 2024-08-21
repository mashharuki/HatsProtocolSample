// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import 'openzeppelin-contracts/contracts/metatx/MinimalForwarder.sol';

contract SampleForwarder is MinimalForwarder {
  constructor() MinimalForwarder() {} 
}