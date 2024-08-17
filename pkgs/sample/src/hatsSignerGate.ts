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
  // ownerHatId
  const hatId = 12078056106883486628010822758984794541789440701298176471534417391648768;
  // signersHatId
  const signersHatId = 12078056518259625958312333297727090181127066946982142879929383228801024;
  // deployHatsSignerGateAndSafe 関数を呼び出す
  const createHsgResult =
    await hatsSignerGateClient.deployHatsSignerGateAndSafe({
      account,
      ownerHatId: BigInt(hatId),
      signersHatId: BigInt(signersHatId),
      minThreshold: BigInt(2),
      targetThreshold: BigInt(2),
      maxSigners: BigInt(3),
    });

  console.log("createHsgResult:", createHsgResult);
};

main();
