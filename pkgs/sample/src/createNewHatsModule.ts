import {HatsModulesClient} from "@hatsprotocol/modules-sdk";
import {account, client, walletClient} from "./index";

// HatsModule SDK用のクライアントインスタンスを生成する。
const hatsModulesClient = new HatsModulesClient({
  publicClient: client,
  walletClient: walletClient,
});

/**
 * メインスクリプト
 */
async function main() {
  // prepareメソッドを実行
  await hatsModulesClient.prepare();

  // moduleId
  const moduleId = "0xAE0e56A0c509dA713722c1aFFcF4B5f1C6CDc73a";
  // hatId
  const hatId = 12078056106883486628010822758984794541789440701298176471534417391648768;
  // Salt Nonce
  const nonce = BigInt(32537843768376847684764643);

  const predictedAddress = await hatsModulesClient.predictHatsModuleAddress({
    moduleId,
    hatId: BigInt(hatId),
    immutableArgs: [
      {
        name: "Admin Hat",
        description:
          "Optional admin hat, granted a permission to create a new term (reelection). If not provided (equals zero), then this permission is granted to the admins of the hat",
        type: "uint256",
        example:
          "26959946667150639794667015087019630673637144422540572481103610249216",
        displayType: "hat",
        optional: true,
      },
    ],
    saltNonce: nonce,
  });

  console.log("predictedAddress:", predictedAddress);

  // create New HatsModule SDK instance
  const createInstanceResult = await hatsModulesClient.createNewInstance({
    account,
    moduleId,
    hatId: BigInt(hatId),
    immutableArgs: [],
    mutableArgs: [],
    saltNonce: nonce,
  });

  console.log("createInstanceResult:", createInstanceResult);
}

main();
