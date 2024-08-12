import {createPublicClient, createWalletClient, formatEther, http} from "viem";
import {sepolia} from "viem/chains";
import * as dotenv from "dotenv";
import {privateKeyToAccount} from "viem/accounts";
import {HatsClient} from "@hatsprotocol/sdk-v1-core";

dotenv.config();

// 環境変数を取得する。
const {RPC_URL, PRIVATE_KEY} = process.env;

// signerオブジェクトを作成する
export const account = privateKeyToAccount(PRIVATE_KEY as `0x${string}`);

// Sepolia ネットワークのクライアントを作成する
export const client = createPublicClient({
  chain: sepolia,
  transport: http(RPC_URL),
});

// Wallet Client の作成
export const walletClient = createWalletClient({
  chain: sepolia,
  transport: http(RPC_URL),
  account,
});

// HatsProtocol用のインスタンスを生成する。
export const hatsClient = new HatsClient({
  chainId: sepolia.id,
  publicClient: client,
  walletClient,
});

/**
 * メインスクリプト
 */
async function main() {
  try {
    // 最後のブロックの番号を取得する
    const blockNumber = await client.getBlockNumber();
    console.log("Current Block Number:", blockNumber);
    // ウォレットの残高を取得する
    const balance = await client.getBalance({address: account.address});
    console.log(`Wallet's Balance: ${formatEther(balance)} ETH`);

    // hat ID
    const hatId = 442;
    console.log("getting hat info");
    // hatの情報を取得する。
    const hatInfo = await hatsClient.viewHat(BigInt(hatId));
    console.log("hatInfo:", hatInfo);
    // hatの着用者かどうかチェックする。
    const isWearer = await hatsClient.isWearerOfHat({
      wearer: account.address,
      hatId: BigInt(hatId),
    });
    console.log("isWearer:", isWearer);
    // hatの管理者かどうかチェックする。
    const isAdmin = await hatsClient.isAdminOfHat({
      user: account.address,
      hatId: BigInt(hatId),
    });
    console.log("isAdmin:", isAdmin);
    // 着用者が良好な状態にあるかチェックする。
    const isGoodStanding = await hatsClient.isInGoodStanding({
      wearer: account.address,
      hatId: BigInt(hatId),
    });
    console.log("isGoodStanding:", isGoodStanding);
    // 適格な着用者であるかどうかチェックする。
    const isEligible = await hatsClient.isEligible({
      wearer: account.address,
      hatId: BigInt(hatId),
    });
    console.log("isEligible:", isEligible);
    // ツリーの数を取得する。
    const numTrees = await hatsClient.getTreesCount();
    console.log("numTrees:", numTrees);
    // 帽子のレベルを取得する。
    const level = await hatsClient.getHatLevel(BigInt(hatId));
    console.log("level:", level);
    // ローカルでの帽子のレベルを取得する。
    const localLevel = await hatsClient.getLocalHatLevel(BigInt(hatId));
    console.log("localLevel:", localLevel);
    // 帽子のドメインを取得する。
    const domain = await hatsClient.getTopHatDomain(BigInt(hatId));
    console.log("domain:", domain);
    // ツリーのリンクリクエストを取得します。
    const requestedAdminHat = await hatsClient.getLinkageRequest(domain);
    console.log("requestedAdminHat:", requestedAdminHat);
    // リンクされたツリーの管理者を取得する。
    const adminHat = await hatsClient.getLinkedTreeAdmin(domain);
    console.log("adminHat:", adminHat);
    // 指定されたツリーが含まれるグローバルツリーのトッパーハットのツリードメインを取得する。
    const tippyTopHatDomain = await hatsClient.getTippyTopHatDomain(domain);
    console.log("tippyTopHatDomain:", tippyTopHatDomain);
    // 帽子の管理者IDを取得する。
    const adminId = await hatsClient.getAdmin(BigInt(hatId));
    console.log("adminId:", adminId);
    // 指定したHatIdに紐づく子供の帽子を取得する。
    const children = await hatsClient.getChildrenHats(BigInt(hatId));
    console.log("childrens:", children);
  } catch (error) {
    console.error("Error:", error);
  }
}

main();
