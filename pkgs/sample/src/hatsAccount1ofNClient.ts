import {HatsAccount1ofNClient} from "@hatsprotocol/hats-account-sdk";
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
  // Hat1ofNのID
  const hatId = 12078056106883486628010822758984794541789440701298176471534417391648768;

  // アカウントアドレスを事前予測する
  const predictedAccount = await hatsAccount1ofNClient.predictAccountAddress({
    hatId: BigInt(hatId),
    salt: BigInt(11111),
  });

  console.log("predictedAccount:", predictedAccount);

  // Hat1ofNアカウントを作成する
  const createHatsAccountResult = await hatsAccount1ofNClient.createAccount({
    account: account,
    hatId: BigInt(hatId),
    salt: BigInt(11111),
  });

  console.log("createHatsAccountResult:", createHatsAccountResult);
};

main();
