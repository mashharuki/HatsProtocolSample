// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

import { Script, console2 } from "forge-std/Script.sol";
import { Module } from "../src/Module.sol";
import {
  HatsModuleFactory, 
  IHats, 
  deployModuleInstance, 
  deployModuleFactory
} from "hats-module/utils/DeployFunctions.sol";

/**
 * デプロイスクリプト
 */
contract Deploy is Script {
  Module public instance;
  Module public implementation;
  address public implementation2;
  address public instance2;
  bytes32 public SALT = bytes32(abi.encode(0xe22dfed15d74553ffe7dc973acb1aedc7e978ba4ff4));

  // Deploy Contract
  HatsModuleFactory public factory2 = HatsModuleFactory(0xfE661c01891172046feE16D3a57c3Cf456729efA);

  // default values
  bool internal _verbose = true;
  string internal _version = "0.0.1"; // increment this with each new deployment

  /**
   * prepareメソッド
   * @dev Override default values, if desired
   */
  function prepare(bool verbose, string memory version) public {
    _verbose = verbose;
    _version = version;
  }

  /**
   * deployを取得するメソッド
   * @dev Set up the deployer via their private key from the environment
   */
  function deployer() public returns (address) {
    uint256 privKey = vm.envUint("PRIVATE_KEY");
    console2.log("deployer address: ", vm.rememberKey(privKey));
    return vm.rememberKey(privKey);
  }

  /**
   * logメソッド
   */
  function _log(string memory prefix) internal view {
    if (_verbose) {
      console2.log(string.concat(prefix, "implementation Module:"), address(implementation));
      console2.log(string.concat(prefix, "instance Module:"), address(instance2));
    }
  }

  /// @dev Deploy the contract to a deterministic address via forge's create2 deployer factory.
  function run() public virtual {
    vm.startBroadcast(deployer());
    
    // hat ID
    uint256 hatId = 12078056106883486628010822758984794541789440701298176471534417391648768;

    // set up the other immutable args
    bytes memory otherImmutableArgs = abi.encodePacked();

    // set up the init args
    bytes memory initArgs = abi.encode(_version);

    // set up the salt nonce
    uint256 saltNonce = 164575476565656565656565656;

    // deploy an instance of the module
    instance2 = factory2.createHatsModule(
      implementation2,
      hatId,
      otherImmutableArgs,
      initArgs,
      saltNonce
    );

    vm.stopBroadcast();

    _log("");
  }
}

/// @dev Deploy pre-compiled ir-optimized bytecode to a non-deterministic address
contract DeployPrecompiled is Deploy {
  /// @dev Update SALT and default values in Deploy contract

  /**
   * run メソッド
   */
  function run() public override {
    vm.startBroadcast(deployer());

    bytes memory args = abi.encode( _version);

    /// @dev Load and deploy pre-compiled ir-optimized bytecode.
    implementation = Module(deployCode("optimized-out/Module.sol/Module.json", args));

    vm.stopBroadcast();

    _log("Precompiled ");
  }
}

/* FORGE CLI COMMANDS

## A. Simulate the deployment locally
forge script script/Deploy.s.sol -f mainnet

## B. Deploy to real network and verify on etherscan
forge script script/Deploy.s.sol -f mainnet --broadcast --verify

## C. Fix verification issues (replace values in curly braces with the actual values)
forge verify-contract --chain-id 1 --num-of-optimizations 1000000 --watch --constructor-args $(cast abi-encode \
 "constructor({args})" "{arg1}" "{arg2}" "{argN}" ) \ 
 --compiler-version v0.8.19 {deploymentAddress} \
 src/{Counter}.sol:{Counter} --etherscan-api-key $ETHERSCAN_KEY

## D. To verify ir-optimized contracts on etherscan...
  1. Run (C) with the following additional flag: `--show-standard-json-input > etherscan.json`
  2. Patch `etherscan.json`: `"optimizer":{"enabled":true,"runs":100}` =>
`"optimizer":{"enabled":true,"runs":100},"viaIR":true`
  3. Upload the patched `etherscan.json` to etherscan manually

  See this github issue for more: https://github.com/foundry-rs/foundry/issues/3507#issuecomment-1465382107

*/
