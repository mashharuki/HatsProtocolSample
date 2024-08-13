import {hatsClient, account} from "./index";

/**
 * メインスクリプト
 */
const main = async () => {
  // Hatをミントする
  const mintTopHatResult = await hatsClient.mintTopHat({
    account,
    target: account.address,
    details: "This is a sample TopHat",
    imageURI:
      "ipfs://bafkreiflezpk3kjz6zsv23pbvowtatnd5hmqfkdro33x5mh2azlhne3ah4",
  });

  console.log("mintTopHatResult:", mintTopHatResult);
};

main();
