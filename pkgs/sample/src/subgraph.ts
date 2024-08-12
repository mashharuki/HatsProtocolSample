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
    chainId: optimism.id, // optimism
    hatId: BigInt(
      "0x0000000100020001000100000000000000000000000000000000000000000000"
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
    chainId: optimism.id, // optimism
    hatIds: [
      BigInt(
        "0x0000000100020001000100000000000000000000000000000000000000000000"
      ),
      BigInt(
        "0x0000000100020001000000000000000000000000000000000000000000000000"
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
