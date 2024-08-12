import {createPublicClient, createWalletClient, formatEther, http} from "viem";
import {sepolia} from "viem/chains";
import * as dotenv from "dotenv";
import {privateKeyToAccount} from "viem/accounts";

dotenv.config();

// 環境変数を取得する。
const {RPC_URL, PRIVATE_KEY} = process.env;

// signerオブジェクトを作成する
const account = privateKeyToAccount(PRIVATE_KEY as `0x${string}`);

// Sepolia ネットワークのクライアントを作成する
const client = createPublicClient({
  chain: sepolia,
  transport: http(RPC_URL),
});

// Wallet Client の作成
const walletClient = createWalletClient({
  chain: sepolia,
  transport: http(RPC_URL),
  account,
});

// クライアントの使用例
async function main() {
  try {
    // 最後のブロックの番号を取得する
    const blockNumber = await client.getBlockNumber();
    console.log("Current Block Number:", blockNumber);
    // ウォレットの残高を取得する
    const balance = await client.getBalance({address: account.address});
    console.log(`Balance of ${account.address}: ${formatEther(balance)} ETH`);
  } catch (error) {
    console.error("Error:", error);
  }
}

main();
