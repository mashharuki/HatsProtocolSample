import {HatsSignerGateClient} from "@hatsprotocol/hsg-sdk";
import {client, walletClient} from "./index";

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

  // 権限を要求する
  const claimSignerResult = await hatsSignerGateClient.hsgClaimSigner({
    account: "0x1295BDc0C102EB105dC0198fdC193588fe66A1e4",
    hsgInstance,
  });

  console.log("claimSignerResult:", claimSignerResult);
};

main();
