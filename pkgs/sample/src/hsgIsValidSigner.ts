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

  // 正当な署名者かどうかを確認する。(Hatを持っているかチェックする。)
  const isValidSignerResult = await hatsSignerGateClient.hsgIsValidSigner({
    hsgInstance,
    address: account.address,
  });

  console.log("isValidSignerResult:", isValidSignerResult);
};

main();
