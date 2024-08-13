import {zeroAddress} from "viem";
import {hatsClient, account} from "./index";

/**
 * メインスクリプト
 */
const main = async () => {
  const hatId = 12078056106883486628010822758984794541789440701298176471534417391648768;
  // Hatを作成する
  const batchCreateHatsResult = await hatsClient.batchCreateHats({
    account,
    admins: [BigInt(hatId)],
    details: ["This is a sample Hat2"],
    maxSupplies: [500],
    eligibilityModules: ["0x0000000000000000000000000000000000000001"],
    toggleModules: ["0x0000000000000000000000000000000000000001"],
    mutables: [true],
    imageURIs: [
      "ipfs://bafkreiflezpk3kjz6zsv23pbvowtatnd5hmqfkdro33x5mh2azlhne3ah4",
    ],
  });

  console.log("batchCreateHatsResult:", batchCreateHatsResult);
};

main();
