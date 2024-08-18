import {HatsSubgraphClient} from "@hatsprotocol/sdk-v1-subgraph";
import {optimism, sepolia} from "viem/chains";

// Subgraph用のインスタンスを生成
const hatsSubgraphClient = new HatsSubgraphClient({
  config: {
    [sepolia.id]: {
      endpoint:
        "https://api.studio.thegraph.com/query/55784/hats-v1-sepolia/version/latest",
    },
    [optimism.id]: {
      endpoint:
        "https://api.studio.thegraph.com/query/55784/hats-v1-optimism/version/latest",
    },
  },
});

/**
 * メインスクリプト
 */
const main = async () => {
  // hatの情報を取得する。
  const hat = await hatsSubgraphClient.getHat({
    chainId: sepolia.id,
    hatId: BigInt(
      "0x000001c000020000000000000000000000000000000000000000000000000000"
      // 12664760623049752223273549914669722706079586129193058213113992646181026529280
    ),
    props: {
      maxSupply: true, // get the maximum amount of wearers for the hat
      wearers: {
        // get the hat's wearers
        props: {}, // for each wearer, include only its ID (address)
      },
      events: {
        // get the hat's events
        props: {
          transactionID: true, // for each event, include the transaction ID
        },
        filters: {
          first: 10, // fetch only the latest 10 events
        },
      },
    },
  });

  console.log("hat:", hat);

  // サンプル用のクエリを実行する
  const res = await hatsSubgraphClient.getHatsByIds({
    chainId: sepolia.id, // optimism
    hatIds: [
      BigInt(
        12078056929635765288613843836469385820464693192666109288324349065953280
      ),
    ],
    props: {
      wearers: {
        // get each hat's wearers
        props: {
          currentHats: {
            // for each wearer, get its hats
            props: {}, // for each hat, include only its ID
          },
        },
      },
    },
  });

  console.log("hatsByIds:", res);

  // wearsを取得する。
  /*
  const wears = await hatsSubgraphClient.getWearer({
    chainId: optimism.id, // optimism
    wearerAddress: "0x51908F598A5e0d8F1A3bAbFa6DF76F9704daD072",
    props: {
      currentHats: {
        // get the wearer's hats
        props: {
          status: true, // for each hat, include its status (active/inactive)
        },
      },
      mintEvent: {
        // get the wearer's hat minting events
        props: {
          blockNumber: true, // for each event, include its block number
        },
        filters: {
          first: 1, // fetch only the latest event
        },
      },
    },
  });

  console.log("wears:", wears);
  */
};

main();
