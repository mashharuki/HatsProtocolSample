import {
  HatsAccount1ofNClient,
  OperationType,
} from "@hatsprotocol/hats-account-sdk";
import {parseEther} from "viem";
import {account, client, walletClient} from "./index";

// hatsAccount1ofNClientを初期化
const hatsAccount1ofNClient = new HatsAccount1ofNClient({
  publicClient: client,
  walletClient: walletClient,
});

/**
 * メインスクリプト
 */
const main = async () => {
  // Account1ofNの instance address
  const instanceAddress = "0x675d12D78338E484D8D18E4df88ab5158b01a5aE";
  // トランザクションを発火させる。
  const executionResult = await hatsAccount1ofNClient.execute({
    account: account,
    instance: instanceAddress,
    operation: {
      to: "0x51908F598A5e0d8F1A3bAbFa6DF76F9704daD072",
      value: parseEther("0.05"),
      data: "0x",
      operation: OperationType.DelegateCall,
    },
  });

  console.log("executionResult:", executionResult);
};

main();
