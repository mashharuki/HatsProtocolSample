import {HatsSignerGateClient} from "@hatsprotocol/hsg-sdk";
import {client, walletClient} from "./index";

// hatsSignerGateClientを初期化
const hatsSignerGateClient = new HatsSignerGateClient({
  publicClient: client,
  walletClient: walletClient,
});

/**
 * メインスクリプト
 */
const main = async () => {
  // hsg instance
  const hsgInstance = "0xd0574A652382c16EA68Fbe725da2b9b94Dfe3567";

  // Get a HSG's Signers Hat ID.
  const signersHat = await hatsSignerGateClient.hsgSignersHatId({
    hsgInstance,
  });

  console.log("signersHat:", signersHat);

  // Get a HSG's attached Safe.
  const safe = await hatsSignerGateClient.getSafe({
    instance: hsgInstance,
  });

  console.log("safe:", safe);

  // Get a HSG's minimum threshold.
  const minThreshold = await hatsSignerGateClient.getMinThreshold({
    instance: hsgInstance,
  });

  console.log("minThreshold:", minThreshold);

  // getTargetThreshold
  const targetThreshold = await hatsSignerGateClient.getTargetThreshold({
    instance: hsgInstance,
  });

  console.log("targetThreshold:", targetThreshold);

  // getMaxSigners
  const maxSigners = await hatsSignerGateClient.getMaxSigners({
    instance: hsgInstance,
  });

  console.log("maxSigners:", maxSigners);

  // getOwnerHat
  const ownerHat = await hatsSignerGateClient.getOwnerHat({
    instance: hsgInstance,
  });

  console.log("ownerHat:", ownerHat);
};

main();
