import {hatIdDecimalToHex, hatIdDecimalToIp} from "@hatsprotocol/sdk-v1-core";

/**
 * メインスクリプト
 */
async function main() {
  // hatId
  const hatId = 12078056929635765288613843836469385820464693192666109288324349065953280;

  const hatIdHex = hatIdDecimalToHex(BigInt(hatId));
  const hatIdIp = hatIdDecimalToIp(BigInt(hatId));
  console.log("hatIdHex:", hatIdHex);
  console.log("hatIdIp:", hatIdIp);
}

main();
