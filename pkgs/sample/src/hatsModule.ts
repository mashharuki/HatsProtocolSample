import {HatsModulesClient} from "@hatsprotocol/modules-sdk";
import {client, walletClient} from "./index";

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
  // 使用可能なモジュールを取得する。
  const modules = hatsModulesClient.getModules();
  console.log("modules:", modules);

  // implementation address
  const moduleId = "0xAE0e56A0c509dA713722c1aFFcF4B5f1C6CDc73a";

  // module IDを指定して取得する。
  const module = hatsModulesClient.getModuleById(moduleId);
  console.log("module ById:", module);

  // implementation address
  const implementationAddress = "0xAE0e56A0c509dA713722c1aFFcF4B5f1C6CDc73a";

  // implementation addressを指定して取得する。
  const module2 = hatsModulesClient.getModuleByImplementation(
    implementationAddress
  );
  console.log("module2:", module2);

  // instance Address
  const instanceAddress = "0x9E01030aF633Be5a439DF122F2eEf750b44B8aC7";

  // Get the module object of an instance.
  const module3 = await hatsModulesClient.getModuleByInstance(instanceAddress);
  console.log("module3:", module3);

  // instance Address
  const instanceAddresses: any = [
    "0x9E01030aF633Be5a439DF122F2eEf750b44B8aC7",
    "0xFb6bD2e96B123d0854064823f6cb59420A285C00",
  ];

  // Get the module object of an instances.
  const module4 = await hatsModulesClient.getModulesByInstances(
    instanceAddresses
  );
  console.log("module4:", module4);
}

main();
