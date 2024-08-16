import {hatsClient, account} from "./index";

/**
 * メインスクリプト
 */
const main = async () => {
  // hatId
  const hatId = 12078056929635765288613843836469385820464693192666109288324349065953280;
  // Hatをrenounceする
  const renounceHatResult = await hatsClient.renounceHat({
    account,
    hatId: BigInt(hatId),
  });

  console.log("renounceHatResult:", renounceHatResult);
};

main();
