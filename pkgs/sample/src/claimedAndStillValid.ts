import {HatsSignerGateClient} from "@hatsprotocol/hsg-sdk";
import {account, client, walletClient} from "./index";

// hatsSignerGateClientを初期化
const hatsSignerGateClient = new HatsSignerGateClient({
  publicClient: client,
  walletClient: walletClient,
});

/**
 * メインスクリプト
 */
const main = async () => {
  // hsg instance
  const hsgInstance = "0xd0574A652382c16EA68Fbe725da2b9b94Dfe3567";

  // 正当な署名者の数を取得する。
  const count = await hatsSignerGateClient.validSignerCount({
    instance: hsgInstance,
  });

  console.log("validSignerCount:", count);

  // 正当な権限を持っていてまだ有効かどうかを確認する。
  const claimedAndStillValidResult =
    await hatsSignerGateClient.claimedAndStillValid({
      instance: hsgInstance,
      address: account.address,
    });

  console.log("claimedAndStillValidResult:", claimedAndStillValidResult);
};

main();
