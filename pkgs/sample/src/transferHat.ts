import {hatsClient, account} from "./index";

/**
 * メインスクリプト
 */
const main = async () => {
  // hatId
  const hatId = 12078056929635765288613843836469385820464693192666109288324349065953280;
  // to address
  const from = "0x1295BDc0C102EB105dC0198fdC193588fe66A1e4";
  const to = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";
  // Hatをtransferする
  const transferHatResult = await hatsClient.transferHat({
    account,
    hatId: BigInt(hatId),
    from: from,
    to: to,
  });

  console.log("transferHatResult:", transferHatResult);
};

main();
