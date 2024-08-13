import {zeroAddress} from "viem";
import {hatsClient, account} from "./index";

/**
 * メインスクリプト
 */
const main = async () => {
  const hatId = 12078056106883486628010822758984794541789440701298176471534417391648768;
  // Hatを作成する
  const createHatResult = await hatsClient.createHat({
    account,
    admin: BigInt(hatId),
    details: "This is a sample Hat2",
    maxSupply: 500,
    eligibility: "0x0000000000000000000000000000000000000001",
    toggle: "0x0000000000000000000000000000000000000001",
    mutable: true,
    imageURI:
      "ipfs://bafkreiflezpk3kjz6zsv23pbvowtatnd5hmqfkdro33x5mh2azlhne3ah4",
  });

  console.log("createHatResult:", createHatResult);
};

main();
