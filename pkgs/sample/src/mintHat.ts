import {hatsClient, account} from "./index";

/**
 * メインスクリプト
 */
const main = async () => {
  const hatId = 442;
  // Hatをミントする
  const mintHatResult = await hatsClient.mintHat({
    account,
    hatId: BigInt(hatId),
    wearer: account.address,
  });

  console.log("mintHatResult:", mintHatResult);
};

main();
